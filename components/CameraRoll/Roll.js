import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, Modal, KeyboardAvoidingView } from 'react-native';
import ImageBrowser from './ImageBrowser';
import { Content, List, ListItem, Body, Right, Footer, FooterTab } from 'native-base';

import CompanyGalleryWrite from '../../screens/company/gallery/CompanyGalleryWrite';
import CompanyCamera from '../../screens/company/gallery/CompanyCamera';


import Camera from '../../components/Camera';

export default class Roll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageBrowserOpen: false,
      photos: [],
      cameraModalVisible: false,
      writeModalVisible: false,
    }
  }


  //cameraModal
  setCameraModalVisible = (visible) => { this.setState({ cameraModalVisible: visible }) }
  closeCameraModal = () => { this.setState({ cameraModalVisible: false }) }

  //writeModal
  setWriteModalVisible = (visible) => { this.setState({ writeModalVisible: visible }) }
  closeWriteModal = () => { this.setState({ writeModalVisible: false }) }

  imageBrowserCallback = (callback) => {
    callback.then((photos) => {
      console.log(photos)
      this.setState({
        imageBrowserOpen: false,
        photos: photos,
      })
      console.log(this.state.photos);
      
      this.setWriteModalVisible(!this.state.writeModalVisible)
    }).catch((e) => console.log(e))
  }

  render() {
    console.log('roll!!!!');
    
    return (
      <View style={{flex: 1}}>
        <ImageBrowser max={10} callback={this.imageBrowserCallback}
          setCameraModal={this.setCameraModalVisible} cameraVisible={this.state.cameraModalVisible}
          // setWriteModal={this.setWriteModalVisible} writeVisible={this.state.writeModalVisible} 
          navigation={this.props.navigation}/>

        <Modal visible={this.state.cameraModalVisible} onRequestClose={this.closeCameraModal}>
          {/* <CompanyCamera closeModal={this.closeCameraModal}/> */}
          <Camera closeModal={this.closeCameraModal}/>
        </Modal>

        <Modal visible={this.state.writeModalVisible} onRequestClose={this.closeWriteModal}>
          <CompanyGalleryWrite photos={this.state.photos} closeModal={this.closeWriteModal} closeAddModal={this.props.closeAddModal} navigation={this.props.navigation}/>
        </Modal>
      </View>
    );
  }
}