import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gallery from '../../../components/gallery/Gallery';
import GalleryList from '../../../components/gallery/GalleryList';

class CompanyGallery extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <GalleryList navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default CompanyGallery;