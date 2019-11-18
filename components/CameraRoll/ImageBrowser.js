import React from 'react';
import { StyleSheet, Text, View, CameraRoll, FlatList, Dimensions } from 'react-native';
import { Button } from 'native-base';
import * as FileSystem from 'expo-file-system'
import * as Permissions from 'expo-permissions';

import ImageTile from './ImageTile';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Platform } from '@unimodules/core';

const { width } = Dimensions.get('window')

export default class ImageBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      selected: {},
      after: null,
      has_next_page: true,
      hasCameraRollPermission: null,
    }
  }

  async componentDidMount() {
    console.log('cdm');

    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    console.log(status);

    this.setState({ hasCameraRollPermission: status === 'granted' });

    console.log(this.state.hasCameraRollPermission);

    if (this.state.hasCameraRollPermission) {
      console.log("cdm_if");

      this.getPhotos()
    }

  }
  selectImage = (index) => {
    let newSelected = { ...this.state.selected };
    if (newSelected[index]) {
      delete newSelected[index];
    } else {
      newSelected[index] = true
    }
    if (Object.keys(newSelected).length > this.props.max) return;
    if (!newSelected) newSelected = {};
    this.setState({ selected: newSelected })
  }

  getPhotos = () => {
    console.log('getPhoto');

    let params = { first: 500, mimeTypes: ['image/jpeg'], assetType: 'Photos' };
    if (this.state.after) params.after = this.state.after
    if (!this.state.has_next_page) return
    CameraRoll
      .getPhotos(params)
      .then(this.processPhotos)
  }

  processPhotos = (r) => {
    if (this.state.after === r.page_info.end_cursor) return;
    let uris = r.edges.map(i => i.node).map(i => i.image).map(i => i.uri)
    this.setState({
      photos: [...this.state.photos, ...uris],
      after: r.page_info.end_cursor,
      has_next_page: r.page_info.has_next_page
    });
  }

  getItemLayout = (data, index) => {
    let length = width / 4;
    return { length, offset: length * index, index }
  }

  prepareCallback() {
    let { selected, photos } = this.state;
    let selectedPhotos = photos.filter((item, index) => {
      return (selected[index])
    });
    let files = selectedPhotos
      .map(i => FileSystem.getInfoAsync(i, { md5: true }))
    let callbackResult = Promise
      .all(files)
      .then(imageData => {
        return imageData.map((data, i) => {
          return { file: selectedPhotos[i], ...data }
        })
      })

    console.log(callbackResult);

    this.props.callback(callbackResult)
  }

  renderHeader = () => {
    let selectedCount = Object.keys(this.state.selected).length;
    let headerText = selectedCount + ' Selected';
    return (
      <View style={styles.header}>
        <Button transparent
          style={{ paddingHorizontal: '3%' }}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.buttonText}>취소</Text>
        </Button>
        <Text>{headerText}</Text>
        {selectedCount === 0 ?
          <Button transparent
            style={{ paddingHorizontal: '3%' }}
            onPress={() => this.props.setCameraModal(!this.props.cameraVisible)}>
            <Icon name='photo-camera' size={30} />
          </Button>
          :
          <Button transparent
            style={{ paddingHorizontal: '3%' }}
            onPress={() => this.prepareCallback()}>
            <Text style={styles.buttonText}>다음</Text>
          </Button>
        }
      </View>
    )
  }

  renderImageTile = ({ item, index }) => {
    let selected = this.state.selected[index] ? true : false
    return (
      <ImageTile
        item={item}
        index={index}
        camera={false}
        selected={selected}
        selectImage={this.selectImage}
      />
    )
  }

  renderImages() {
    console.log("renderImage");

    return (
      <FlatList
        data={this.state.photos}
        numColumns={4}
        renderItem={this.renderImageTile}
        keyExtractor={(_, index) => index}
        onEndReached={() => { this.getPhotos() }}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<Text>Loading...</Text>}
        initialNumToRender={24}
        getItemLayout={this.getItemLayout}
      />
    )
  }

  render() {
    if (this.state.hasCameraRollPermission === null) {
      return (
        <View />
      )
    } else if (this.state.hasCameraRollPermission === false) {
      return (
        <View style={styles.container}>
          {this.renderHeader()}
          <View style={{ flex: 2, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }} >
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', paddingBottom: '3%' }}>갤러리 접근</Text>
            {Platform.OS !== 'ios' ?  <Button transparent
              style={{ size: 30 }}
              onPress={
                async () => {
                  console.log('뭐지');

                  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
                  console.log(status);

                  this.setState({ hasCameraRollPermission: status === 'granted' });
                }}>
              <Text style={{ fontSize: 20, color: '#0B5713' }} >설정</Text>
            </Button> : null}
           
            <Button>
              <Text style={{ fontSize: 20, color: '#0B5713' }}>뒤로가기</Text>
            </Button>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          {this.renderHeader()}
          {this.renderImages()}
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    width: width,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 20
  },
  buttonText: {
    color: '#0B5713',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
