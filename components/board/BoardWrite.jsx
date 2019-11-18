import React, { useState, useEffect } from 'react';
import { withNavigation, ScrollView } from 'react-navigation';
import { Block } from 'galio-framework';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, ActionSheetIOS, BackHandler } from 'react-native';
import { Header, Content, Item, Input, Footer, FooterTab, Left, Body, Right, Button } from 'native-base';
import ActionSheet from 'react-native-actionsheet'

import Icon from 'react-native-vector-icons/FontAwesome';

const BoardWrite = ({ navigation, move }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    }, [])

    const handleBackButton = () => {
        return true;
    }

    const cancleButton = () => {
        if (Platform.OS == 'android') {
            this.ActionSheet.show()
        } else {
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: ['돌아가기', '게시글 삭제'],
                    destructiveButtonIndex: 1,
                    cancelButtonIndex: 0,
                },
                (index) => {
                    // 1: 게시글 삭제
                    if (index == 1) {
                        navigation.navigate(move);
                    }
                },
            );
        }
    }

    const optionButton = (index) => {
        // 0: 게시글 삭제
        // 1: 돌아가기
        if (index == 0) {
            navigation.navigate(move);
        }
    }

    const clearButton = () => {
        navigation.navigate(move);
    }

    return (
        <Block flex style={{ backgroundColor: '#f2f0f2' }}>
            <Header style={styles.navbar}>
                <Left>
                    <Button hasText transparent style={{ paddingLeft: '10%' }}
                        onPress={cancleButton}>
                        <Text style={{ fontSize: 15 }}>취소</Text>
                    </Button>
                </Left>
                <Body>
                    <Text style={styles.title}>글쓰기</Text>
                </Body>
                <Right>
                    <Button hasText transparent>
                        {
                            title != '' && content != '' ?
                                <Text style={{ fontSize: 15, color: '#000000' }}
                                    onPress={clearButton}>완료</Text>
                                :
                                <Text style={{ fontSize: 15, color: '#ADB5BD' }}>완료</Text>
                        }
                    </Button>
                </Right>
            </Header>

            <ActionSheet
                ref={o => this.ActionSheet = o}
                options={['게시글 삭제', '돌아가기']}
                cancelButtonIndex={1}
                destructiveButtonIndex={0}
                onPress={(index) => optionButton(index)} />

            <Content>
                <View style={{ padding: '3%' }}>
                    <Item>
                        <Input placeholder='제목' style={{ fontSize: 20 }}
                            onChangeText={(text) => { setTitle(text) }} />
                    </Item>
                </View>
                <View style={{ padding: '4%' }}>
                    <TextInput
                        multiline={true}
                        numberOfLines={15}
                        placeholder="게시글 써봐"
                        textAlignVertical={'top'}
                        style={{ fontSize: 17 }}
                        onChangeText={(text) => { setContent(text) }} />
                </View>
            </Content>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'position'}
                keyboardVerticalOffset={Platform.OS == 'ios' ? -34 : 0}>
                <ScrollView>
                    <Footer>
                        <FooterTab transparent style={{ backgroundColor: '#f2f0f2' }}>
                            <View style={{ paddingLeft: '5%', paddingTop: '4%' }}>
                                <Icon name="photo" size={25} />
                            </View>
                        </FooterTab>
                    </Footer>
                </ScrollView>
            </KeyboardAvoidingView>
        </Block >
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: Platform.OS == 'ios' ? '10%' : '0%',
        color: '#525F7F',
    },
    navbar: {
        backgroundColor: 'white'
    }

})

export default withNavigation(BoardWrite);