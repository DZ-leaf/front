import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, Modal, KeyboardAvoidingView, Dimensions } from 'react-native';
import ImageBrowser from './ImageBrowser';
import { Block, Input } from 'galio-framework';
import { Content, List, ListItem, Body, Right, Footer, FooterTab } from 'native-base';

import CompanyGalleryWrite from '../../screens/company/gallery/CompanyGalleryWrite.jsx';
import CompanyCamera from '../../screens/company/gallery/CompanyCamera.jsx';


import Camera from '../../components/Camera';
import IconF from 'react-native-vector-icons/Feather';
import IconT from 'react-native-vector-icons/FontAwesome5';


const { width } = Dimensions.get('screen')
export default class Roll extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      imageBrowserOpen: false,
      photos: [],
      cameraModalVisible: false,
      writeModalVisible: false,

      tags: [],
      inputText: '',
    }
  }

  // add camera image
  setPhoto = (photo) => {
    this.setState({photos: this.state.photos.concat(photo)})
  }

  // deleteTag
  deleteTag = (index) => {
    this.setState({ tags: this.state.tags.slice(0, index).concat(this.state.tags.slice(index + 1, this.state.tags.length)) }) 
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
    console.log(this.state.photos);
    
    return (
      <View style={{ flex: 1 }}>
        <ImageBrowser max={10} callback={this.imageBrowserCallback}
          setCameraModal={this.setCameraModalVisible} cameraVisible={this.state.cameraModalVisible} closeAddModal={this.props.closeAddModal}/>

        <Modal visible={this.state.cameraModalVisible} onRequestClose={this.closeCameraModal}>
          {/* <CompanyCamera closeModal={this.closeCameraModal}/> */}
          <Camera closeModal={this.closeCameraModal} setPhoto={this.setPhoto} setWriteModal={this.setWriteModalVisible} writeModalVisible={this.state.writeModalVisible}/>
        </Modal>

        <Modal visible={this.state.writeModalVisible} onRequestClose={this.closeWriteModal}>
          <CompanyGalleryWrite photos={this.state.photos} closeModal={this.closeWriteModal} closeAddModal={this.props.closeAddModal} 
            navigation={this.props.navigation} tags={this.state.tags} deleteTag={this.deleteTag}/>

          <KeyboardAvoidingView behavior={'padding'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? -34 : -230} >
            <Footer>
              <FooterTab transparent style={{ backgroundColor: '#ffffff' }}>
                <Block row>
                  <View style={{ paddingLeft: '3%' }}>
                    <Input style={styles.text} color='black'
                      iconContent={<IconT size={11} style={{ paddingRight: '1%', color: 'lightgray' }} name="hashtag" />}
                      placeholder='태그입력' value={this.state.inputText}
                      onChangeText={(text) => {
                        if (text.charAt(text.length - 1) === ' ') {
                          if(text.length === 1) return;
                          this.setState({ tags: this.state.tags.concat(text), inputText: '' })
                        } else { this.setState({ inputText: text }) }
                      }}
                    />
                  </View>
                  <View style={styles.send}>
                    <IconF name="send" size={25}
                      color={this.state.inputText == '' ? '#ADB5BD' : '#0B5713'} />
                  </View>
                </Block>
              </FooterTab>
            </Footer>
          </KeyboardAvoidingView >
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  send: {
    paddingTop: '4%',
    paddingLeft: '3%',
    paddingRight: '2%'
  },
  text: {
    backgroundColor: '#f2f0f2',
    width: width * 0.85,
  },
})