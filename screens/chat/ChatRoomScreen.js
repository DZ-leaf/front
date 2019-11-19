
import React, { useState, useEffect } from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Spinner } from 'native-base';
import { AjaxWS } from "../../lib/websocket/webSocketUrl";
import { AjaxChat } from "../../lib/chatUrl";
import { GiftedChat } from 'react-native-gifted-chat';

import { useSelector } from 'react-redux';

const ChatRoomScreen = ({navigation}) => {

    console.log(navigation)

    const info = useSelector(state => state.member.memberInfo);

    const [messages, setMessages] = useState('');

    let user = {
        name: info.memberName,
        _id: info.memberId,
    }

    let room = navigation.state.params.room
    console.log("ㅋㅋㅋㅋ"+room)

    const update = (data) => {

        var message = JSON.parse(data.body);
        console.log("ㅁㄴㅇㄹ"+message)
        
        const onSend = (message = []) => {
            setMessages(GiftedChat.append(messages, message))
        }
        // setMessages((previousState) => {
        //     GiftedChat.append(previousState.messages, message), messages
        // })

        // this.setState(previousState => ({
        //     messages: GiftedChat.append(previousState.messages, message),
        // }))
    }

    useEffect(() => {
        const roomCd = room.roomCd;
        AjaxWS.connect(roomCd, update);
        getMessage();
    }, [])

    // const getUser = () => {
    //     return {
    //         name: 'nm',
    //         _id: 'id',
    //     };
    // }

    const getMessage = async () => {
        const data = await AjaxChat.getPastMessage(room.roomCd)
        setMessages(data)
        // this.setState({
        //     ...this.state,
        //     messages: data
        // })
    }

    const send = messages => {

        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            const message = {
                text,
                user,
                roomIdx: room.roomCd,
                roomName: room.roomNm
            };
            AjaxWS.send(message);
        }
    };

    return (
        <GiftedChat
            messages={messages}
            onSend={send}
            user={user}
        />
    );
}

export default ChatRoomScreen;