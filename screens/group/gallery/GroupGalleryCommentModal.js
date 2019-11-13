import React, { Component } from 'react';
import { StyleSheet, View, Image, FlatList, TouchableOpacity, Text, Dimensions } from 'react-native';
import { withNavigation, ScrollView } from 'react-navigation';
import { Block, theme, Input } from 'galio-framework';
import { Content, List, ListItem, Thumbnail, Left, Body, Right, Button, Footer, FooterTab } from 'native-base';

import Icons from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("screen");

class GroupGalleryCommentModal extends Component {
    state = {
        like: false,
        comment: ''
    }

    render() {
        return (
            <Block flex style={{marginTop: 5, backgroundColor: '#f2f0f2'}}>
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
                                            color={this.state.like == false ? '#ADB5BD' : '#0B5713'}
                                            onPress={this.likeButton}></Icons>
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
                                            color={this.state.like == false ? '#ADB5BD' : '#0B5713'}
                                            onPress={this.likeButton}></Icons>
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
                                            color={this.state.like == false ? '#ADB5BD' : '#0B5713'}
                                            onPress={this.likeButton}></Icons>
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
                                            color={this.state.like == false ? '#ADB5BD' : '#0B5713'}
                                            onPress={this.likeButton}></Icons>
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
                                            color={this.state.like == false ? '#ADB5BD' : '#0B5713'}
                                            onPress={this.likeButton}></Icons>
                                        <Text>{'\u00A0'}12</Text>
                                    </Block>
                                    <Text style={styles.time}>3:43 pm</Text>
                                </Right>
                            </ListItem>

                        </List>
                    </Content>
                </ScrollView>
            </Block>
        );
    }
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

export default GroupGalleryCommentModal;