import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GalleryDetail from '../../../components/gallery/GalleryDetail';

export default class CompanyGalleryDetail extends Component {
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

// export default CompanyGalleryDetail;