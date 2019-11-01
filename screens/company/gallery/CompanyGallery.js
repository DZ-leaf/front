import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CompanyGallery extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>회사 갤러리</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CompanyGallery;