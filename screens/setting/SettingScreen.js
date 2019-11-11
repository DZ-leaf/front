import React, { Component } from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { Container, Body, Content, List, ListItem, Left, Right } from 'native-base';
import { Block } from 'galio-framework'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SettingScreen extends Component {

    logout = async () => {
        try {
            await AsyncStorage.clear();
            this.props.navigation.navigate('Member')
        } catch(e) {
            console.error(e);
        }
        // this.props.navigation.navigate('Member')
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>

                        <ListItem>
                            <Left>
                                <Icon name="settings" size={20} />
                            </Left>
                            <View style={{ paddingRight: '70%' }}>
                                <Text>설정 1</Text>
                            </View>
                            <Right>
                                <Icon name="arrow-right-thick" size={20} />
                            </Right>
                        </ListItem>

                        <ListItem onPress={this.logout}>
                            <Left>
                                <Icon name="logout-variant" size={20} />
                            </Left>
                            <View style={{ paddingRight: '70%' }}>
                                <Text>로그아웃</Text>
                            </View>
                        </ListItem>

                    </List>
                </Content>
            </Container>
        );
    }
}


export default SettingScreen;