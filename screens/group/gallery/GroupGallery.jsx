import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import GalleryList from '../../../components/gallery/GalleryList.jsx';
import FAB from 'react-native-fab';

import Icon from 'react-native-vector-icons/MaterialIcons';

const GroupGallery = (props) => {

    return (
        <View style={styles.container}>
            {/* <GalleryList navigation={props.navigation} />
            <FAB buttonColor="#0B5713" iconTextColor="#FFFFFF"
                onClickAction={() => { props.navigation.navigate('GroupAddGallery') }} visible={true}
                iconTextComponent={<Icon name="add" />} snackOffset={Platform.OS == 'ios' ? 30 : 10} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default GroupGallery;