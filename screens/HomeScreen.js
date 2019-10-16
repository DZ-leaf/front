import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class HomeScreen extends Component {

    static navigationOptions = {
        drawerIcon: (
            <Icon name="home" size={25}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>홈</Text>
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

export default HomeScreen;