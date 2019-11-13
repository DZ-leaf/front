import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Block, Input } from "galio-framework";
import { Container, Content, List, ListItem, Thumbnail, Left, Body, Right } from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('screen');

class AddressList extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <Block row style={{ paddingLeft: '2%', paddingRight: '2%' }}>
                        <View style={{ width: width * 0.85 }}>
                            <Input
                                placeholder="검색"
                                iconContent={<Icon size={20} style={{ marginRight: 10 }} 
                                name="account-search" />}
                                color={'#000000'} placeholderTextColor="#ADB5BD" />
                        </View>
                        <View style={{ paddingTop: '4.5%', paddingLeft: '3.5%' }}>
                            <Text>찾기</Text>
                        </View>
                    </Block>
                    
                    <List>

                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'Image URL' }} />
                            </Left>
                            <Body>
                                <Text>김아무개</Text>
                            </Body>
                            <Right>
                                <Icon name={'chat-processing'} size={23} />
                            </Right>
                        </ListItem>

                    </List>
                </Content>
            </Container>
        );
    }
}


export default withNavigation(AddressList);