import React, { Component } from 'react';
import { StyleSheet, View, Platform, Modal } from 'react-native';
import GalleryList from '../../../components/gallery/GalleryList';
import FAB from 'react-native-fab';

import Icon from 'react-native-vector-icons/MaterialIcons';

import CompanyAddGallery from './CompanyAddGallery';

class CompanyGallery extends Component {
    state= {
        addModalVisible: false,
    }

    setAddModalVisible = (visible) => {
        this.setState({
            addModalVisible: visible,
        })
    }

    closeAddModal = () => {
        this.setState({
            addModalVisible: false,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <GalleryList navigation={this.props.navigation}/>
                <FAB buttonColor="#0B5713" iconTextColor="#FFFFFF" onClickAction={() => {this.props.navigation.navigate('CompanyAddGallery')}} visible={true} 
                    iconTextComponent={<Icon name="add"/>}  snackOffset={Platform.OS == 'ios'? 30 : 10}/>

                <Modal visible={this.state.addModalVisible} animationType='slide' onRequestClose={() => {this.closeAddModal()}}>
                    <CompanyAddGallery closeModal={this.closeAddModal} />
                </Modal>
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