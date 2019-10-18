import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class FindScreen extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>찾기</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F2F0'
    }
})

export default FindScreen;