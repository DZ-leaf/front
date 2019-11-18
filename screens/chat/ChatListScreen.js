import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Spinner } from 'native-base';
import { AjaxWS } from "../../lib/webSocketUrl";
import { AjaxChat } from "../../lib/chatUrl";
class ChatListScreen extends Component {

    state = {
        rooms: [],
    }

    getrooms() {
        return AjaxChat.getRooms()
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    rooms: responseJson.rooms
                })
            })
    }

    componentWillMount() {
        this.getrooms();
    }

    enterRoom = (a) => {
        console.log(a);
    }

    render() {
        const { rooms } = this.state;
        const { navigation } = this.props;
        console.log(rooms);
        return (
            <Container>
                <Content>
                    <List>
                        {rooms.map((item) => {
                            return (
                                <ListItem key={item.roomCd} onPress={() => {
                                    console.log("testtsyt");

                                    navigation.navigate("Room", { RoomId: item.roomNm })
                                }}>
                                    <Body>
                                        <Text>{item.roomNm} {(item.roomType == 1) ? "회사" : "그룹"}</Text>
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
