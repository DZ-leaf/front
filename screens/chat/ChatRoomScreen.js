
import React, { useState, useEffect } from 'react';
import { AjaxWS } from "../../lib/websocket/webSocketUrl";
import { AjaxChat } from "../../lib/chatUrl";
import { GiftedChat } from 'react-native-gifted-chat';

import { useSelector } from 'react-redux';

let msg=[]

const ChatRoomScreen = ({navigation}) => {


    const info = useSelector(state => state.member.memberInfo);

    const [messages, setMessages] = useState([]);

    let user = {
        name: info.memberName,
        _id: info.memberId,
    }

    let msgs = messages;

    let room = navigation.state.params.room

    msg = messages;

    const update = (data) => {

        
        var message = JSON.parse(data.body);
        
        
        setMessages(GiftedChat.append(msg, message))     
    }

    useEffect(() => {
        const roomCd = room.roomCd;
        AjaxWS.connect(roomCd, update);
        getMessage();
    }, [])



    const getMessage = async () => {
        const data = await AjaxChat.getPastMessage(room.roomCd)
        console.log(data);
        
        await setMessages(data)
        console.log("%%%");
        
        console.log(messages);
        
        
    }

    const send = mes => {
        console.log("dddd"+mes);
        for (let i = 0; i < mes.length; i++) {
            const { text, user } = mes[i];
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