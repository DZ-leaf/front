import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ClubScreen extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>동아리</Text>
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

export default ClubScreen;