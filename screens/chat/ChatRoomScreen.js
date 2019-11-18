
import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Spinner } from 'native-base';
import { AjaxWS } from "../../lib/websocket/webSocketUrl";
import { AjaxChat } from "../../lib/chatUrl";
import { GiftedChat } from 'react-native-gifted-chat';

class ChatRoomScreen extends Component {

    state = {
        messages: [
            // {
            //     _id: 1,
            //     text: 'This is a system message',
            //     createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
            //     system: true,
            //     // Any additional custom parameters are passed through
            // },
            // {
            //     _id: 2,
            //     text: 'Hello developer',
            //     createdAt: new Date(),
            //     user: {
            //         _id: 'sadb0101',
            //         name: '은우',
            //     },
            // },
            // {
            //     _id: 3,
            //     text: 'My message',
            //     createdAt: new Date(),
            //     user: {
            //         _id: 'sadb0101',
            //         name: '은우',
            //     },
            // },
            // {
            //     _id: 4,
            //     text: 'My message',
            //     createdAt: new Date(),
            //     user: {
            //         _id: 'id',
            //         name: 'nm',
            //     },
            // },
        ],
        room: this.props.navigation.getParam("room")
    }

    // onMessageReceived = (data) =>{
    //     console.log();

    // }
    tmp = (data) => {
        console.log("!@#!@#!@#!@#!@#!@#!@#!@#!@#!@#");

        console.log(data.body);
        var message = JSON.parse(data.body);
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
        }))
        console.log("!@#!@#!@#!@#!@#!@#!@#!@#!@#!@#");
        // this.setState({
        //     data:data
        // })
    }
    componentWillMount() {
        const roomCd = this.state.room.roomCd;
        AjaxWS.connect(roomCd, this.tmp);

        this.getMessage();
    }

    get user() {
        return {
            name: 'nm',
            _id: 'id',
        };
    }
    async getMessage() {
        const data = await AjaxChat.getPastMessage(this.state.room.roomCd)
        this.setState({
            ...this.state,
            messages: data
        })
    }

    send = messages => {
        const { room } = this.state;

        // let createdAt = new Date().toString();
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            // 4.
            const message = {
                text,
                user,
                roomIdx: room.roomCd,
                roomName: room.roomNm
            };
            AjaxWS.send(message);
        }
    };


    render() {

        if (this.state.data)
            console.log(data);

        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.send}
                user={this.user}
            />
        );
    }
}

export default ChatRoomScreen;