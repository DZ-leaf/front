import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GalleryDetail from '../../../components/gallery/GalleryDetail';

class GroupGalleryDetail extends Component {
    render() {
        return (
        <View style={styles.container}>
            <GalleryDetail navigation={this.props.navigation}/>
         </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default GroupGalleryDetail;