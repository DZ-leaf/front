import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { withNavigation, ScrollView } from 'react-navigation';
import { Block, Input } from 'galio-framework';

import { Content, List, ListItem, Body, Right, Footer, FooterTab } from 'native-base';

import Icons from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Feather';


const { width } = Dimensions.get("screen");

const BoardRead = () => {

    const [like, setLike] = useState(false);
    const [comment, setComment] = useState('');

    const likeButton = () => {
        if (!like) setLike(true)
        else if (like) setLike(false)
    }
    
    return (
        <Block flex>
            <ScrollView>
                <Content>
                    <List>

                        <ListItem>
                            <Body>
                                <Text style={{ fontWeight: 'bold' }}>작성자</Text>
                                <Text>댓글은 짧고 간결하게</Text>
                            </Body>
                            <Right>
                                <Block row>
                                    <Icons name="leaf" size={20}
                                        color={!like ? '#ADB5BD' : '#0B5713'}
                                        onPress={likeButton}></Icons>
                                    <Text>{'\u00A0'}12</Text>
                                </Block>
                                <Text style={styles.time}>3:43 pm</Text>
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Body>
                                <Text style={{ fontWeight: 'bold' }}>작성자</Text>
                                <Text>댓글은 짧고 간결하게</Text>
                            </Body>
                            <Right>
                                <Block row>
                                    <Icons name="leaf" size={20}
                                        color={!like ? '#ADB5BD' : '#0B5713'}
                                        onPress={likeButton}></Icons>
                                    <Text>{'\u00A0'}12</Text>
                                </Block>
                                <Text style={styles.time}>3:43 pm</Text>
                            </Right>
                        </ListItem>

                    </List>
                </Content>
            </ScrollView>

            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'position'}
                keyboardVerticalOffset={Platform.OS == 'ios' ? -34 : 0}>
                <Footer>
                    <FooterTab transparent style={{ backgroundColor: '#ffffff' }}>
                        <Block row>
                            <View style={{ paddingLeft: '3%' }}>
                                <Input style={styles.text} placeholder="댓글"
                                    placeholderTextColor="#ADB5BD" color='black'
                                    onChangeText={(text) => { setComment(text) }} />
                            </View>
                            <View style={styles.send}>
                                <IconF name="send" size={25}
                                    color={comment == '' ? '#ADB5BD' : '#0B5713'} />
                            </View>
                        </Block>
                    </FooterTab>
                </Footer>
            </KeyboardAvoidingView>
        </Block>
    );
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: '#f2f0f2',
        width: width * 0.85,
    },
    send: {
        paddingTop: '4%',
        paddingLeft: '3%',
        paddingRight: '2%'
    },
    time: {
        color: '#707070',
        paddingTop: '4%'
    },
})

export default withNavigation(BoardRead);