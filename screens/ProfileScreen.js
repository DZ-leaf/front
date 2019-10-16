import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class ProfileScreen extends Component {

    static navigationOptions = {
        drawerIcon: (
            <Icon name="person" size={25}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>프로필</Text>
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

export default ProfileScreen;