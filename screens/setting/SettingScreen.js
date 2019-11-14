import React, { Component } from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { Container, Header, Content, List, ListItem, Separator, Left, Right } from 'native-base';
import { Block } from 'galio-framework'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SettingScreen extends Component {

    logout = async () => {
        this.props.navigation.navigate('Member')
        console.log("로그아웃")
        await AsyncStorage.clear();
    //     let data = await AsyncStorage.getAllKeys();
    //     let items = await AsyncStorage.multiGet(data)
    //   console.log(items.length)
    //     if(items.length != 0) {
    //         AsyncStorage.clear();
    //         this.props.navigation.navigate('Member')
    //     }
    }

    render() {
        return (
            <Container>
                <Content>

                    <Separator bordered>
                        <Text>회사</Text>
                    </Separator>
                    <ListItem>
                        <Left>
                            <Icon name="settings" size={20} />
                        </Left>
                        <View style={{ marginRight: 290 }}>
                            <Text>회사 설정</Text>
                        </View>
                        <Right>
                            <Icon name="arrow-right-thick" size={20} />
                        </Right>
                    </ListItem>

                    <Separator bordered>
                        <Text>그룹</Text>
                    </Separator>
                    <ListItem>
                        <Left>
                            <Icon name="settings" size={20} />
                        </Left>
                        <View style={{ marginRight: 290 }}>
                            <Text>그룹 설정</Text>
                        </View>
                        <Right>
                            <Icon name="arrow-right-thick" size={20} />
                        </Right>
                    </ListItem>

                    <Separator bordered>
                        <Text>계정</Text>
                    </Separator>

                    <ListItem onPress={this.logout}>
                        <Left>
                            <Icon name="logout-variant" size={20} />
                        </Left>
                        <View style={{ marginRight: 310 }}>
                            <Text>로그아웃</Text>
                        </View>
                    </ListItem>

                </Content>
            </Container>
        );
    }
}


export default SettingScreen;