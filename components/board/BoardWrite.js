import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Block } from 'galio-framework';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Header, Content, Item, Input, Footer, FooterTab, Left, Body, Right, Button } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

class BoardWrite extends Component {
    render() {
        return (
            <Block flex style={{backgroundColor: '#f2f0f2'}}>
                <Header style={{backgroundColor: 'white'}}>
                    <Left>
                        <Button hasText transparent>
                            <Text style={{fontSize: 15}}>취소</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.title}>글쓰기</Text>
                    </Body>
                    <Right>
                        <Button hasText transparent>
                            <Text style={{fontSize: 15}}>완료</Text>
                        </Button>
                    </Right>
                </Header>
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
                    keyboardVerticalOffset={Platform.OS == 'ios' ? 55 : 90}>
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
        width: '100%',
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: '0.8%',
        color: '#525F7F',
      },
})

export default withNavigation(BoardWrite);