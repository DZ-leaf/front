import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, Modal } from 'react-native';
import * as Permissions from 'expo-permissions';
import { ImageBrowser } from 'expo-multiple-imagepicker';

import CompanyGalleryWrite from '../../screens/company/gallery/CompanyGalleryWrite';
import CompanyCamera from '../../screens/company/gallery/CompanyCamera';

export default class CameraRoll extends React.Component {
    // _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            // hasCameraPermission: null,
            imageBrowserOpen: true,
            writeModalVisible: false,
            cameraModalVisible: false,
            photos: []
        }
    }

    // async componentDidMount() {
    //     this._isMounted = true;

    //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //     this.setState({ hasCameraPermission: status === 'granted' });
    // }

    // componentWillUnmount() {
    //     this._isMounted = false;
    //   }

    // wirteModal
    setWriteModalVisible = (visible) => {this.setState({writeModalVisible: visible, })}
    closeWriteModal = () => {this.setState({ writeModalVisible: false, }) }

    // cameraModal
    setcameraModalVisible = (visible) => { this.setState({ cameraModalVisible: visible, })}
    closeCameraModal = () => { this.setState({ cameraModalVisible: false, })}

    imageBrowserCallback = (callback) => {
        callback.then((photos) => {
            this.setState({
                imageBrowserOpen: false,
                photos,
            })
            // console.log(this.state.photos, this.props.navigation.navigate('CompanyGalleryWrite', {photos: this.state.photos}));
            // this.props.navigation.navigate('CompanyGalleryWrite');
            this.setWriteModalVisible(!this.state.writeModalVisible)
        }).catch((e) => console.log(e))
    }

    renderImage(item, i) {
        return (
            <Image
                style={{ height: 100, width: 100 }}
                source={{ uri: item.file }}
                key={i}
            />
        )
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View><Text>null</Text></View>
        } else if (hasCameraPermission === false) {
            return <View><Text>false</Text></View>
        } else {
            return (

                <View style={{ flex: 1 }}>
                    <ImageBrowser max={10} callback={this.imageBrowserCallback} 
                        closeModal={this.props.closeModal} 
                        cameraModalVisible={this.setcameraModalVisible}
                        cameraVisible={this.state.cameraModalVisible}/>

                    <Modal visible={this.state.writeModalVisible} onRequestClose={() => { this.closeWriteModal() }}>
                        <CompanyGalleryWrite closeModal={this.closeWriteModal} photos={this.state.photos} />
                    </Modal>

                    <Modal visible={this.state.cameraModalVisible} onRequestClose={() => { this.closeCameraModal() }}>
                        <CompanyCamera closeModal={this.closeCameraModal} photos={this.state.photos} />
                    </Modal>
                </View>
            );
        }
    }
}