import React, { useState } from 'react';
import { StyleSheet, View, Platform, Modal } from 'react-native';
import FAB from 'react-native-fab';

import Icon from 'react-native-vector-icons/MaterialIcons';

import CompanyAddGallery from './CompanyAddGallery'
import GalleryList from '../../../components/gallery/GalleryList';

const CompanyGallery = (props) => {

    const [addModalVisible, setAddModalVisible] = useState(false)

    const addModalVisibleSet = (visible) => { setAddModalVisible(visible) }
    const closeAddModal = () => { setAddModalVisible(false) }

    return (
        <View style={styles.container}>
            <GalleryList navigation={props.navigation} />
            <FAB buttonColor="#0B5713" iconTextColor="#FFFFFF"
                onClickAction={() => { addModalVisibleSet(!this.state.addModalVisible) }} visible={true}
                iconTextComponent={<Icon name="add" />} snackOffset={Platform.OS == 'ios' ? 30 : 10} />
                
            <Modal visible={addModalVisible} onRequestClose={() => { closeAddModal() }}>
                <CompanyAddGallery closeModal={closeAddModal} navigation={props.navigation} />
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default CompanyGallery;