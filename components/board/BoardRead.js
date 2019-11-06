import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Block, Input } from 'galio-framework';

import { Content, List, ListItem, Thumbnail, Left, Body, Right, Button, Footer, FooterTab } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/SimpleLineIcons';

import BoardComment from './BoardComment';

import Images from "../../constants/Images";

const { width, height } = Dimensions.get("screen");

class BoardRead extends Component {

    state = {
        like: false,
        comment: ''
    }

    likeButton = () => {
        if (this.state.like == false) {
            this.setState({
                like: true
            })
        } else if (this.state.like == true) {
            this.setState({
                like: false
            })
        }
    }

    render() {
        return (
            <Block flex>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={Images.ProfilePicture} resizeMode={"center"} />
                        </Left>
                        <Body>
                            <Text style={{ fontWeight: 'bold' }}>작성자</Text>
                            <Text note>11시간 전</Text>
                        </Body>
                        <Right>
                            <Icon name='leaf' size={20}
                                color={this.state.like == false ? '#ADB5BD' : '#0B5713'}
                                onPress={this.likeButton} />
                        </Right>
                        <Right>
                            <Icons name='options-vertical' size={15} />
                        </Right>
                    </ListItem>
                </List>
                <View style={styles.text}>
                    <Text>
                        ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ
                        ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ
                        ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ
                        ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ
                        ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ
                        ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ
                    </Text>
                </View>
                <View style={{ paddingLeft: '5%' }}>
                    <Block row>
                        <Icon name="leaf" size={20} color='#0B5713' />
                        <Text>{'\u00A0'}12 {'\u00A0'}{'\u00A0'}</Text>
                        <Icon name="comments" size={20} />
                        <Text>{'\u00A0'}4 {'\u00A0'}{'\u00A0'}</Text>
                    </Block>
                </View>
                <Block middle>
                <View
                    style={{
                        paddingBottom: '3%',
                        borderBottomColor: '#DCDCDC',
                        borderBottomWidth: 1,
                        width: width * 0.9,
                    }}
                />
                </Block>
                <BoardComment />
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        padding: '5%'
    },

})

export default withNavigation(BoardRead);