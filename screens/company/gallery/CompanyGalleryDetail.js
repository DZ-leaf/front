import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gallery from '../../../components/gallery/Gallery';

export default class CompanyGalleryDetail extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Gallery/>
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