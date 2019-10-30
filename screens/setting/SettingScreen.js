import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Container, Body, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';

class SettingScreen extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <List>

                        <ListItem selected>
                            <Left>
                                <Icon active name="settings" />
                            </Left>
                            <Body>
                                <Text>설정 1</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Icon active name="settings" />
                            </Left>
                            <Body>
                                <Text>설정 2</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Icon active name="settings" />
                            </Left>
                            <Body>
                                <Text>설정 3</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>

                    </List>
                </Content>
            </Container>
        );
    }
}


export default SettingScreen;