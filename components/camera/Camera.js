import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Button } from 'native-base';

import Icon from 'react-native-vector-icons/AntDesign'
// import IconC from 'react-native-vector-icons/FontAwesome'
import IconC from 'react-native-vector-icons/MaterialCommunityIcons'

const { width } = Dimensions.get('screen');

export default class Cameras extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async snapPhoto() {
    console.log('Button Pressed');
    if (this.camera) {
      console.log('Taking photo');
      const options = {
        quality: 1, base64: true, fixOrientation: true,
        exif: true
      };
      await this.camera.takePictureAsync(options).then(photo => {
        photo.exif.Orientation = 1;
        console.log(photo);
      });
    }
    else (console.log("???")
    )
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return (<View style={{ flex: 1 }}>
        <View style={{ flex: 2, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }} >
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', paddingBottom: '3%' }}>카메라 사용</Text>
          <Text style={{ fontSize: 15, color: 'white', }}>앱으로 사진 및 동영상을 찍을 수 있습니다.</Text>
          <Button transparent><Text style={{ fontSize: 15, color: '#0B5713' }}
            onPress={
              async () => {
                const { status } = await Permissions.askAsync(Permissions.CAMERA);
                this.setState({ hasCameraPermission: status === 'granted' });
              }}>설정</Text></Button>
        </View>
      </View>)
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 2 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
              }}>
              <Icon name='sync' size={30} style={{ color: 'white', paddingLeft: '5%', paddingBottom: '5%' }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }} />
            </View>
          </Camera>
          <View style={styles.buttonContainer}>
            {/* <IconC name='circle-o' size={80} style={{color: 'lightgray'}} onPress={() =>  {this.snapPhoto()}}/> */}
            <IconC name='circle-slice-8' size={80} style={{color: 'lightgray'}} onPress={() =>  {this.snapPhoto()}}/>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})