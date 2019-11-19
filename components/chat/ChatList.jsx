import React, {useState, useEffect} from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Spinner } from 'native-base';
import { AjaxWS } from "../../lib/websocket/webSocketUrl";
import { AjaxChat } from "../../lib/chatUrl";

const ChatListScreen = ({navigation}) => {

    const [rooms, setRooms] = useState([]);

    const getRooms = () => {
        return AjaxChat.getRooms()
            .then((responseJson) => {
                setRooms(responseJson.rooms)
            })
    }

    useEffect(() => {
        getRooms();
    }, []);

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


export default ChatListScreen;
