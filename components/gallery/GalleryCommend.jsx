import React, { useState } from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { ScrollView } from 'react-navigation';
import { Block } from 'galio-framework';
import { Content, List, ListItem, Body, Right } from 'native-base';

import Icons from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get("screen");

const GalleryComment = () => {

    const [like, setLike] = useState(false);

    const likeButton = () => {
        if (!like) setLike(true)
        else if (like) setLike(false)
    }

    return (
        <Block flex style={{ marginTop: 5, backgroundColor: '#f2f0f2' }}>
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
                                        color={!like == false ? '#ADB5BD' : '#0B5713'}
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
                                        color={!like == false ? '#ADB5BD' : '#0B5713'}
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
                                        color={!like == false ? '#ADB5BD' : '#0B5713'}
                                        onPress={likeButton}></Icons>
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

export default GalleryComment;