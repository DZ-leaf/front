import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Block, theme, Input, } from 'galio-framework';

import Roll from '../../../components/CameraRoll/Roll';

class GroupAddGallery extends Component {
    // componentDidMount(){
        
    // }   
     render() {
        return (
            <Block flex>
                <Roll navigation={this.props.navigation}/>
            </Block>
        );
    }
}

export default GroupAddGallery;