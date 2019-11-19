import React, { useState } from 'react';
import { StyleSheet, View, Modal, KeyboardAvoidingView, Dimensions, Platform } from 'react-native';
import ImageBrowser from './ImageBrowser';
import { Block, Input } from 'galio-framework';
import { Footer, FooterTab } from 'native-base';

import CompanyGalleryWrite from '../gallery/GalleryWrite';

import Camera from '../../components/Camera.jsx';
import IconF from 'react-native-vector-icons/Feather';
import IconT from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('screen')

const Roll = ({ closeAddModal, navigation, moveDetail }) => {

  // const [imageBrowserOpen, setImageBrowserOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [cameraModalVisible, setCameraModalVisible] = useState(false);
  const [writeModalVisible, setWriteModalVisible] = useState(false);
  const [tags, setTags] = useState([]);
  const [inputText, setInputText] = useState('');

  // add camera image
  const setPhoto = (photo) => { setPhotos(photos.concat(photo)) }

  // deleteTag
  const deleteTag = (index) => { setTags(tags.slice(0, index).concat(tags.slice(index + 1, tags.length))) }

  //cameraModal
  const cameraModalVisibleSet = (visible) => { setCameraModalVisible(visible) }
  const closeCameraModal = () => { setCameraModalVisible(false) }

  //writeModal
  const writeModalVisibleSet = (visible) => { setWriteModalVisible(visible) }
  const closeWriteModal = () => { setWriteModalVisible(false) }

  const imageBrowserCallback = (callback) => {
    callback.then((photos) => {
      // setImageBrowserOpen(false);
      setPhotos(photos);
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
          navigation={navigation} tags={tags} deleteTag={deleteTag} moveDetail={moveDetail}/>

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
                      } else {
                        setInputText(text)
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