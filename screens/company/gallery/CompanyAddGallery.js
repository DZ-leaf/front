import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Block, theme, Input, } from 'galio-framework';

import Roll from '../../../components/CameraRoll/Roll';

class CompanyAddGallery extends Component {
    // componentDidMount(){
        
    // }   
     render() {
         console.log(this.props.navigation);
         
        return (
            <Block flex>
                <Roll navigation={this.props.navigation}/>
            </Block>
        );
    }
}

export default CompanyAddGallery;