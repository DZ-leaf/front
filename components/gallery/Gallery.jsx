import React, { useState } from 'react';
import { StyleSheet, View, Platform, Modal } from 'react-native';
import FAB from 'react-native-fab';

import Icon from 'react-native-vector-icons/MaterialIcons';

import GalleryAddModal from './GalleryAddModal';
import GalleryList from './GalleryList';

const Gallery = (props) => {

    const [addModalVisible, setAddModalVisible] = useState(false)

    const addModalVisibleSet = (visible) => { setAddModalVisible(visible) }
    const closeAddModal = () => { setAddModalVisible(false) }

    return (
        <View style={{flex: 1}}>
            <GalleryList navigation={props.navigation} />
            <FAB buttonColor="#0B5713" iconTextColor="#FFFFFF"
                onClickAction={() => { addModalVisibleSet(!addModalVisible) }} visible={true}
                iconTextComponent={<Icon name="add" />} snackOffset={Platform.OS == 'ios' ? 30 : 10} />
                
            <Modal visible={addModalVisible} onRequestClose={() => { closeAddModal() }}>
                <GalleryAddModal closeModal={closeAddModal} navigation={props.navigation} />
            </Modal>

        </View>
    );
}


export default Gallery;