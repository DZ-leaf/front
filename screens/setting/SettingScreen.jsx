import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage, Alert, Image } from 'react-native';
import { Container, Content, ListItem, Separator, Left, Right, Card, CardItem, Thumbnail, Body } from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingScreen = ({ navigation }) => {

    const [memberName, setMemberName] = useState('')

    useEffect(() => {
        // getName();
    }, [])

    const getName = async () => {

    }

    const logout = async () => {
        Alert.alert(
            '로그아웃',
            '로그아웃 하시겠습니까?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: async () => {
                        await AsyncStorage.clear();
                        navigation.navigate('Member')
                    }
                },
            ],
            { cancelable: false },
        );
    }

    return (
        <Container>
            <Content>

                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: 'Image URL' }} />
                            <Body>
                                <Text>{memberName}</Text>
                                <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>

                </Card>

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

                <ListItem onPress={logout}>
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


export default SettingScreen;