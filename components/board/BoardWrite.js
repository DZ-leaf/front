import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Block, theme } from 'galio-framework';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, Dimensions, 
    ActionSheetIOS, Alert, BackHandler, } from 'react-native';
import { Header, Content, Item, Input, Footer, FooterTab, Left, Body, Right, Button } from 'native-base';
import ActionSheet from 'react-native-actionsheet'

import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

class BoardWrite extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        return true;
    }

    cancleButton = () => {
        if(Platform.OS == 'android') {
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
                    if(index == 1){
                        this.props.navigation.navigate("CompanyBoardList");
                    }
                },
              );
        }
    }

    optionButton = (index) => {
        // 0: 게시글 삭제
        // 1: 돌아가기
        if(index == 0){
            this.props.navigation.navigate("CompanyBoardList");
        }
    }

    clearButton = () => {
        this.props.navigation.navigate("CompanyBoardList");
    }

    render() {
        return (
            <Block flex style={{ backgroundColor: '#f2f0f2' }}>
                <Header style={styles.navbar}>
                    <Left>
                        <Button hasText transparent style={{ paddingLeft: '10%' }}
                            onPress={this.cancleButton}>
                            <Text style={{ fontSize: 15 }}>취소</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.title}>글쓰기</Text>
                    </Body>
                    <Right>
                        <Button hasText transparent>
                            <Text style={{ fontSize: 15 }}
                            onPress={this.clearButton}>완료</Text>
                        </Button>
                    </Right>
                </Header>

                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    options={['게시글 삭제', '돌아가기']}
                    cancelButtonIndex={1}
                    destructiveButtonIndex={1}
                    onPress={(index) => this.optionButton(index)}
                />

                <Content>
                    <View style={{ padding: '3%' }}>
                        <Item>
                            <Input placeholder='제목' style={{ fontSize: 20 }} />
                        </Item>
                    </View>
                    <View style={{ padding: '4%' }}>
                        <TextInput
                            multiline={true}
                            numberOfLines={15}
                            placeholder="게시글 써봐"
                            textAlignVertical={'top'}
                            style={{ fontSize: 17 }}
                        />
                    </View>
                </Content>
                <KeyboardAvoidingView behavior="padding"
                    keyboardVerticalOffset={Platform.OS == 'ios' ? -34 : 0}>
                    <Footer>
                        <FooterTab transparent style={{ backgroundColor: '#f2f0f2' }}>
                            <View style={{ paddingLeft: '5%', paddingTop: '4%' }}>
                                <Icon name="photo" size={25} />
                            </View>
                        </FooterTab>
                    </Footer>
                </KeyboardAvoidingView>
            </Block >
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: Platform.OS == 'ios' ? '15%' : '0%',
        color: '#525F7F',
    },
    navbar: {
        paddingVertical: 0,
        paddingBottom: theme.SIZES.BASE * 1.5,
        paddingTop: iPhoneX ? theme.SIZES.BASE * 2 : theme.SIZES.BASE,
        zIndex: 5,
        backgroundColor: 'white'
    }

})

export default withNavigation(BoardWrite);