import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, Modal, KeyboardAvoidingView, Dimensions, Platform } from 'react-native';
import ImageBrowser from './ImageBrowser.jsx';
import { Block, Input } from 'galio-framework';
import { Content, List, ListItem, Body, Right, Footer, FooterTab } from 'native-base';

import CompanyGalleryWrite from '../gallery/GalleryWrite';

import Camera from '../../components/Camera';
import IconF from 'react-native-vector-icons/Feather';
import IconT from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('screen')

const Roll = ({closeAddModal, navigation}) => {

  const [imageBrowserOpen, setImageBrowserOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [cameraModalVisible, setCameraModalVisible] = useState(false);
  const [writeModalVisible, setWriteModalVisible] = useState(false);
  const [tags, setTags] = useState([]);
  const [inputText, setInputText] = useState('');

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     imageBrowserOpen: false,
  //     photos: [],
  //     cameraModalVisible: false,
  //     writeModalVisible: false,

  //     tags: [],
  //     inputText: '',
  //   }
  // }

  // add camera image
  const setPhoto = (photo) => {
    setPhotos(photos.concat(photo))
    // this.setState({photos: this.state.photos.concat(photo)})
  }

  // deleteTag
  const deleteTag = (index) => {
    setTags(tags.slice(0, index).concat(tags.slice(index + 1, tags.length)));
    // this.setState({ tags: this.state.tags.slice(0, index).concat(this.state.tags.slice(index + 1, this.state.tags.length)) }) 
  }

  //cameraModal
  const cameraModalVisibleSet = (visible) => {
    setCameraModalVisible(visible)
    // this.setState({ cameraModalVisible: visible }) 
  }
  const closeCameraModal = () => {
    setCameraModalVisible(false)
    // this.setState({ cameraModalVisible: false }) 
  }

  //writeModal
  const writeModalVisibleSet = (visible) => {
    setWriteModalVisible(visible)
    // this.setState({ writeModalVisible: visible }) 
  }
  const closeWriteModal = () => {
    setWriteModalVisible(false)
    // this.setState({ writeModalVisible: false }) 
  }

  const imageBrowserCallback = (callback) => {
    callback.then((photos) => {
      // console.log(photos)
      setImageBrowserOpen(false);
      setPhotos(photos);
      // this.setState({
      //   imageBrowserOpen: false,
      //   photos: photos,
      // })
      // console.log(this.state.photos);

      setWriteModalVisible(!writeModalVisible)
    }).catch((e) => console.error(e))
  }


  return (
    <View style={{ flex: 1 }}>
      <ImageBrowser max={10} callback={imageBrowserCallback}
        setCameraModal={cameraModalVisibleSet} 
        cameraVisible={cameraModalVisible} closeAddModal={closeAddModal} />

      <Modal visible={cameraModalVisible} onRequestClose={closeCameraModal}>
        {/* <CompanyCamera closeModal={closeCameraModal}/> */}
        <Camera closeModal={closeCameraModal} setPhoto={setPhoto} setWriteModal={writeModalVisibleSet} writeModalVisible={writeModalVisible} />
      </Modal>

      <Modal visible={writeModalVisible} onRequestClose={closeWriteModal}>
        <CompanyGalleryWrite photos={photos} closeModal={closeWriteModal} closeAddModal={closeAddModal}
          navigation={navigation} tags={tags} deleteTag={deleteTag} />

        <KeyboardAvoidingView behavior={'padding'}
          keyboardVerticalOffset={Platform.OS == 'ios' ? -34 : -230} >
          <Footer>
            <FooterTab transparent style={{ backgroundColor: '#ffffff' }}>
              <Block row>
                <View style={{ paddingLeft: '3%' }}>
                  <Input style={styles.text} color='black'
                    iconContent={<IconT size={11} style={{ paddingRight: '1%', color: 'lightgray' }} name="hashtag" />}
                    placeholder='태그입력' value={inputText}
                    onChangeText={(text) => {
                      if (text.charAt(text.length - 1) === ' ') {
                        if (text.length === 1) return;
                        setTags(tags.concat(text));
                        setInputText('');
                        // this.setState({ tags: tags.concat(text), inputText: '' })
                      } else { 
                        setInputText(text)
                        // this.setState({ inputText: text }) 
                      }
                    }}
                  />
                </View>
                <View style={styles.send}>
                  <IconF name="send" size={25}
                    color={inputText == '' ? '#ADB5BD' : '#0B5713'} />
                </View>
              </Block>
            </FooterTab>
          </Footer>
        </KeyboardAvoidingView >
      </Modal>
    </View>
  );
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

export default Roll;