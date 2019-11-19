import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, CameraRoll, FlatList, Dimensions } from 'react-native';
import { Button } from 'native-base';
import * as FileSystem from 'expo-file-system'
import * as Permissions from 'expo-permissions';

import ImageTile from './ImageTile.jsx';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Platform } from '@unimodules/core';

const { width } = Dimensions.get('window')

const ImageBrowser = (props) => {

  const [photos, setPhotos] = useState([]);
  const [selected, setSelected] = useState({});
  const [after, setAfter] = useState(null);
  const [has_next_page, set_has_next_page] = useState(true);
  const [hasCameraRollPermission, setHasCameraRollPermission] = useState(null);

  useEffect(() => {
    getStatus();
  }, [])

  const getStatus = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    setHasCameraRollPermission(status === 'granted')
    if (hasCameraRollPermission) {
      getPhotos()
    }
  }

  const selectImage = (index) => {
    let newSelected = { ...selected };
    if (newSelected[index]) {
      delete newSelected[index];
    } else {
      newSelected[index] = true
    }
    if (Object.keys(newSelected).length > props.max) return;
    if (!newSelected) newSelected = {};
    setSelected(newSelected)
  }

  const getPhotos = () => {
    let params = { first: 500, mimeTypes: ['image/jpeg'], assetType: 'Photos' };
    if (after) params.after = after
    if (!has_next_page) return
    CameraRoll
      .getPhotos(params)
      .then(processPhotos)
  }

  const processPhotos = (r) => {
    if (after === r.page_info.end_cursor) return;
    let uris = r.edges.map(i => i.node).map(i => i.image).map(i => i.uri)
    setPhotos([...photos, ...uris])
    setAfter(r.page_info.end_cursor);
    set_has_next_page(r.page_info.has_next_page);
  }

  const getItemLayout = (data, index) => {
    let length = width / 4;
    return { length, offset: length * index, index }
  }

  const prepareCallback = () => {
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

    props.callback(callbackResult)
  }

  const renderHeader = () => {
    let selectedCount = Object.keys(selected).length;
    let headerText = selectedCount + ' Selected';

    return (
      <View style={styles.header}>
        <Button transparent
          style={{ paddingHorizontal: '3%' }}
          onPress={() => props.closeAddModal()}>
          <Text style={styles.buttonText}>취소</Text>
        </Button>
        <Text>{headerText}</Text>
        {selectedCount === 0 ?
          <Button transparent
            style={{ paddingHorizontal: '3%' }}
            onPress={() => props.setCameraModal(!props.cameraVisible)}>
            <Icon name='photo-camera' size={30} />
          </Button>
          :
          <Button transparent
            style={{ paddingHorizontal: '3%' }}
            onPress={() => prepareCallback()}>
            <Text style={styles.buttonText}>다음</Text>
          </Button>
        }
      </View>
    )
  }

  const renderImageTile = ({ item, index }) => {
    let selected = selected[index] ? true : false
    return (
      <ImageTile
        item={item}
        index={index}
        camera={false}
        selected={selected}
        selectImage={selectImage}
      />
    )
  }

  const renderImages = () => {
    return (
      <FlatList
        data={photos}
        numColumns={4}
        renderItem={renderImageTile}
        keyExtractor={(_, index) => index}
        onEndReached={() => { getPhotos() }}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<Text>Loading...</Text>}
        initialNumToRender={24}
        getItemLayout={getItemLayout}
      />
    )
  }

  if (hasCameraRollPermission === null) {
    return (
      <View />
    )
  } else if (hasCameraRollPermission === false) {
    return (
      <View style={styles.container}>
        {renderHeader()}
        <View style={{ flex: 2, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }} >
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', paddingBottom: '3%' }}>갤러리 접근</Text>
          {Platform.OS !== 'ios' ?
            <Button transparent style={{ size: 30 }}
              onPress={async () => {
                const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
                setHasCameraRollPermission(status === 'granted')
              }}>
              <Text style={{ fontSize: 20, color: '#0B5713' }} >설정</Text>
            </Button> : null}

          <Button transparent>
            <Text style={{ fontSize: 20, color: '#0B5713' }}>뒤로가기</Text>
          </Button>
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        {renderHeader()}
        {renderImages()}
      </View>
    );
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

export default ImageBrowser;