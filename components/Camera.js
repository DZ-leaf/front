import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Button } from 'native-base';

const {width} = Dimensions.get('screen');

export default class Cameras extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }


  render() {      
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
        return (<View style={{ flex: 1 }}>
            <View style={{ flex: 2 , backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}} >
              <Text style={{fontSize: 20, color: 'white', fontWeight:'bold', paddingBottom: '3%' }}>카메라 사용</Text>
              <Text style={{fontSize: 15, color: 'white',}}>앱으로 사진 및 동영상을 찍을 수 있습니다.</Text>
              <Button transparent><Text style={{fontSize: 15, color: '#0B5713'}} 
                onPress={
                    async () => {const { status } = await Permissions.askAsync(Permissions.CAMERA);
                    this.setState({ hasCameraPermission: status === 'granted' });}}>설정</Text></Button>
            </View>
            <TouchableOpacity
                  style={{
                    flex: 1,
                    // alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  }}
                  onPress={() => {
                    this.setState({
                      type:
                        this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text style={{ fontSize: 18, marginBottom: 10, color: 'black' }}> Flip </Text>
                </TouchableOpacity>
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
              }}>
            </View>
          </Camera>
          <TouchableOpacity
                style={{
                  flex: 1,
                  // alignSelf: 'flex-end',
                  alignItems: 'center',
                  backgroundColor: 'white',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'black' }}> Flip </Text>
              </TouchableOpacity>
        </View>
      );
    }
  }
}