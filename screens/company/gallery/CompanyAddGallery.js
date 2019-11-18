import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Block, theme, Input, } from 'galio-framework';

import Roll from '../../../components/CameraRoll/Roll';

class CompanyAddGallery extends Component {
     render() {
        
         
        return (
            <Block flex>
                <Roll closeAddModal={this.props.closeModal} navigation={this.props.navigation}/>
            </Block>
        );
    }
}

export default CompanyAddGallery;