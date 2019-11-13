import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, Modal } from 'react-native';
import { Block, theme, Input, } from 'galio-framework';

import Camera from '../../../components/camera/Camera';
import CameraRoll from '../../../components/camera/CameraRoll';

class CompanyAddGallery extends Component {
     render() {         
        return (
            <Block flex>
                {/* <StatusBar  hidden/> */}
                {/* <Text>Gallery 추가 (카메라, 갤러리 접근)</Text> */}
                {/* <Camera navigation={this.props.navigation}/> */}
                <CameraRoll closeModal={this.props.closeModal} />
            </Block>
        );
    }
}

export default CompanyAddGallery;