import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Block, theme } from "galio-framework";

import GroupAtHome from './Home/GroupAtHome';

class HomeScreen extends Component {

    renderGroup = () => {
        return(<GroupAtHome />);
    }

    render() {
        return (
            <Block>
            <View>
                {this.renderGroup()}
                <Text>홈</Text>
            </View>
            </Block>
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