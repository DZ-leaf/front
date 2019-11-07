import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Body, Text, Content, List, ListItem, Left, Right } from 'native-base';
import { Block } from 'galio-framework'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SettingScreen extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <List>

                        <ListItem selected>
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

                        <ListItem>
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