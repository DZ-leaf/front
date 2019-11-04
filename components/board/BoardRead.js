import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Block } from 'galio-framework';

import { List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Images from "../../constants/Images";

class BoardRead extends Component {
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
                            <Icon name='options-vertical' size={15}/>
                        </Right>
                    </ListItem>
                </List>
            </Block>
        );
    }
}

export default withNavigation(BoardRead);