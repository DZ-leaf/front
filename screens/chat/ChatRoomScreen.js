
import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Spinner } from 'native-base';
import { AjaxWS } from "../../lib/webSocketUrl";
import { AjaxChat } from "../../lib/chatUrl";
import { GiftedChat } from 'react-native-gifted-chat';

class ChatRoomScreen extends Component {

    render() {
        console.log(this.props.navigation.getParam("RoomId"));

        return (
            <GiftedChat/>                
        );
    }
}

export default ChatRoomScreen;