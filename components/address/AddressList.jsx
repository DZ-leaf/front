import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Block, Input } from "galio-framework";
import { Container, Content, List, ListItem, Thumbnail, Left, Body, Right } from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('screen');

const AddressList = () => {

    return (
        <Container>
            <Content>
                <Block middle row style={{ paddingLeft: '2%', paddingRight: '2%' }}>
                    <View style={{ width: width * 0.97 }}>
                        <Input
                            placeholder="검색"
                            iconContent={<Icon size={20} style={{ marginRight: 10 }}
                                name="account-search" />}
                            color={'#000000'} placeholderTextColor="#ADB5BD" />
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


export default withNavigation(AddressList);