import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import GalleryList from '../../../components/gallery/GalleryList';
import FAB from 'react-native-fab';

import Icon from 'react-native-vector-icons/MaterialIcons';

class CompanyGallery extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <GalleryList navigation={this.props.navigation}/>
<<<<<<< HEAD
                <FAB buttonColor="#0B5713" iconTextColor="#FFFFFF" onClickAction={() => {this.props.navigation.navigate('CompanyAddGallery')}} visible={true} 
=======
                <FAB  buttonColor="#0B5713" iconTextColor="#FFFFFF" onClickAction={() => {this.props.navigation.navigate('CompanyAddGallery')}} visible={true} 
>>>>>>> parent of c89d42b... 갤러리 등록 폼
                    iconTextComponent={<Icon name="add"/>}  snackOffset={Platform.OS == 'ios'? 30 : 10}/>
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