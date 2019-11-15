import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, Modal } from 'react-native';
import { Block, theme, Input, } from 'galio-framework';
import Camera from '../../../components/Camera';


class CompanyAddGallery extends Component {
     render() {
        return (
            <Block flex>
                {/* <StatusBar  hidden/> */}
                {/* <Text>Gallery 추가 (카메라, 갤러리 접근)</Text> */}
                <Camera navigation={this.props.navigation}/>
            </Block>
        );
    }
}

export default CompanyAddGallery;