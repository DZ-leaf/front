import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Image } from 'react-native';
import { Block, Button, theme, Text } from 'galio-framework';
import { Container, Content, Item, Input } from 'native-base';

import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

const ProfileEditModal = (props) => {
    return (
        <Block flex>
            <Block flex style={{ paddingTop: '8%' }}>
                <Block flex style={styles.info}>
                    <Block row space="between" style={{ marginTop: 20, paddingBottom: '10%' }}>
                        <Block middle>
                            <Text bold size={17} color="#525F7F" onPress={props.closeModal}>취소</Text>
                        </Block>
                        <Block middle>
                            <Text bold color="#525F7F" size={20}>프로필 수정</Text>
                        </Block>
                        <Block middle>
                            <Text bold color={argonTheme.COLORS.PRIMARY}
                                size={17} onPress={props.closeModal}>완료</Text>
                        </Block>
                    </Block>
                </Block>
            </Block>

            <Block flex style={{ marginTop: -130 }}>
                <Block middle style={styles.avatarContainer}>
                    <Image source={Images.ProfilePicture} style={styles.avatar} resizeMode={"center"} />
                    <Text size={17}>{"\n"}프로필 사진 바꾸기</Text>
                </Block>
            </Block>

            <Block flex style={{ paddingBottom: '50%' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.padding2}>
                        <Text p size={17}>이름</Text>
                    </View>
                    <View style={{ width: width * 0.7, paddingLeft: '4%' }}>
                        <Content>
                            <Item>
                                <Input value={"김아무개"} readonly/>
                            </Item>
                        </Content>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.padding3}>
                        <Text size={17}>아이디</Text>
                    </View>
                    <View style={{ width: width * 0.68, paddingLeft: '2%' }}>
                        <Content>
                            <Item>
                                <Input value={"아이디"} readonly/>
                            </Item>
                        </Content>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.padding3}>
                        <Text size={17}>이메일</Text>
                    </View>
                    <View style={{ width: width * 0.68, paddingLeft: '2%' }}>
                        <Content>
                            <Item>
                                <Input value={"이메일"} readonly />
                            </Item>
                        </Content>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.padding2}>
                        <Text size={17}>소개</Text>
                    </View>
                    <View style={{ width: width * 0.7, paddingLeft: '4%' }}>
                        <Content>
                            <Item>
                                <Input placeholder="소개글" />
                            </Item>
                        </Content>
                    </View>
                </View>
            </Block>

        </Block>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: '#F0F2F0',
        // flexDirection: 'row',
    },
    button: {
        width: width - theme.SIZES.BASE * 30,
        // height: theme.SIZES.BASE * 3,
    },
    inputs: {
        marginTop: '-4%',
        borderRadius: 0,
    },
    item: {
        backgroundColor: 'white',
        height: height * 0.05,
        paddingTop: '2.5%',
        paddingLeft: '4%',
        marginVertical: '1%',
    },
    title: {
        paddingLeft: '25%',
        paddingTop: '3%',
        fontWeight: '400',
        fontSize: 20
    },
    info: {
        paddingHorizontal: 40
    },
    avatarContainer: {
        position: "relative",
        // marginTop: -200,
    },
    avatar: {
        width: 124,
        height: 124,
        backgroundColor: '#F0F2F0',
    },
    padding2: {
        padding: '5%'
    },
    padding3: {
        paddingBottom: '5%',
        paddingTop: '5%',
        paddingLeft: '4%',
        paddingRight: '5%'
    },
    input: {
        width: width * 0.7,
        borderColor: '#F0F2F0',
    }
});

export default ProfileEditModal;