import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Button } from 'native-base';

import Icon from 'react-native-vector-icons/AntDesign'
import IconC from 'react-native-vector-icons/MaterialCommunityIcons'


const Cameras = (props) => {

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getStatus();
  }, [])

  const getStatus = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setHasCameraPermission(status === 'granted');
  }

  const snapPhoto = async () => {
    if (camera) {
      const options = {
        quality: 1, base64: false, fixOrientation: true,
        exif: true
      };
      await camera.takePictureAsync(options).then(photo => {
        photo.exif.Orientation = 1;
        props.setPhoto(photo)
        props.closeModal();
        props.setWriteModal(!props.writeModalVisible)
      });
    }
  }

  // deleteTag
  deleteTag = (index) => { setTags(tags.slice(0, index).concat(tags.slice(index + 1, tags.length))) }

  //writeModal
  setWriteModalVisible = (visible) => { setWriteModalVisible(visible) }
  closeWriteModal = () => { setWriteModalVisible(false) }

  if (hasCameraPermission === null) {
    return <View />;
  } else if (hasCameraPermission === false) {
    return (<View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }} >
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', paddingBottom: '3%' }}>카메라 사용</Text>
        <Text style={{ fontSize: 15, color: 'white', }}>앱으로 사진 및 동영상을 찍을 수 있습니다.</Text>
        {Platform.OS !== 'ios' ?
          <Button transparent
            style={{ size: 30 }}
            onPress={async () => {
              const { status } = await Permissions.askAsync(Permissions.CAMERA);
              setHasCameraPermission(status === 'granted')
            }}>
            <Text style={{ fontSize: 20, color: '#0B5713' }}>설정</Text></Button>
          : null
        }
        <Button transparent style={{ size: 30 }} onPress={() => { props.closeModal() }}>
          <Text style={{ fongSize: 20, color: '#0B5713' }}>돌아가기</Text>
        </Button>
      </View>
    </View>)
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 2 }} type={type} ref={(ref) => { camera = ref }}>
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
                setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)
              }} />
          </View>
        </Camera>
        <View style={styles.buttonContainer}>
          <IconC name='circle-slice-8' size={80} style={{ color: 'lightgray' }}
            onPress={() => { snapPhoto() }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Cameras;