import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
import { Container, Content, List, ListItem, Body, Text, Left, Right, Thumbnail } from 'native-base';

class AlarmScreen extends Component {
    render() {
        return (
            <Container>
                <Content>

                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail source={{ uri: 'Image URL' }} />
                            </Left>
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Text>뭐 넣던지</Text>
                            </Right>
                        </ListItem>
                    </List>
                    
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail source={{ uri: 'Image URL' }} />
                            </Left>
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Text>뭐 넣던지</Text>
                            </Right>
                        </ListItem>
                    </List>
                    
                </Content>
            </Container>
        );
    }
}

export default AlarmScreen;