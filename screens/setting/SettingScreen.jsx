import React from 'react';
import { Text, AsyncStorage, Alert } from 'react-native';
import { Container, Content, ListItem, Separator, Left, Right, Card, CardItem, Thumbnail, Body } from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSelector } from 'react-redux';

import Images from '../../constants/Images';

const SettingScreen = ({ navigation }) => {

    const info = useSelector(state => state.member.memberInfo);

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
                        navigation.navigate('Member')
                        await AsyncStorage.clear();
                    }
                },
            ],
            { cancelable: false },
        );
    }

    const profileDetail = () => {
        console.log("여기")
    }

    return (
        <Container>
            <Content>

                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={Images.ProfilePicture} />
                            <Body>
                                <Text onPress={profileDetail}>{info.memberName}</Text>
                                <Text style={{ color: '#707070' }} onPress={profileDetail}>내 프로필</Text>
                            </Body>
                        </Left>
                    </CardItem>
                </Card>

                <Separator bordered>
                    <Text>회사</Text>
                </Separator>
                <ListItem>
                    <Left>
                        <Icon name="desktop-mac" size={20} />
                        <Body>
                            <Text>{'\u00A0'}{'\u00A0'}회사 설정</Text>
                        </Body>
                    </Left>
                    <Right>
                        <Icon name="arrow-right-thick" size={20} />
                    </Right>
                </ListItem>

                <Separator bordered>
                    <Text>그룹</Text>
                </Separator>
                <ListItem>
                    <Left>
                        <Icon name="account-multiple" size={20} />
                        <Body>
                            <Text>{'\u00A0'}{'\u00A0'}그룹 설정</Text>
                        </Body>
                    </Left>
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
                        <Body>
                            <Text>{'\u00A0'}{'\u00A0'}로그아웃</Text>
                        </Body>
                    </Left>
                </ListItem>

            </Content>
        </Container>
    );
}


export default SettingScreen;