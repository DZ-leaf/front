import React from 'react';
import { StyleSheet, View } from 'react-native';
import GalleryDetail from '../../../components/gallery/GalleryDetail.jsx';

const GroupGalleryDetail = (props) => {

    return (
        <View style={styles.container}>
            {/* <GalleryDetail navigation={props.navigation} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default GroupGalleryDetail;