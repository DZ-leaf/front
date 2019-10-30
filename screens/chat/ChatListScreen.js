import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

import ChatScreen from './ChatScreen';

class ChatListScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>

                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'Image URL' }} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>

                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'Image URL' }} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>

                    </List>
                </Content>
            </Container>
        );
    }
}


export default ChatListScreen;