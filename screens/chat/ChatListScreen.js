import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Spinner } from 'native-base';
import { AjaxWS } from "../../lib/websocket/webSocketUrl";
import { AjaxChat } from "../../lib/chatUrl";
class ChatListScreen extends Component {

    state = {
        rooms: [],
    }

    getrooms() {
        return AjaxChat.getRooms()
            .then((responseJson) => {
                this.setState({
                    rooms: responseJson.rooms
                })
            })
    }

    componentWillMount() {
        this.getrooms();
    }
    render() {
        const { rooms } = this.state;
        const { navigation } = this.props;
        return (
            <Container>
                <Content>
                    <List>
                        {rooms.map((room) => {
                            return (
                                <ListItem key={room.roomCd} onPress={() => {
                                    navigation.navigate("Room", { room: room })
                                }}>
                                    <Body>
                                        <Text>{room.roomNm} {(room.roomType == 1) ? "회사" : "그룹"}</Text>
                                    </Body>
                                </ListItem>
                            )
                        })}
                    </List>
                </Content>
            </Container>
        );
    }
}


export default ChatListScreen;
