import React from 'react';

import ChatList from '../../components/chat/ChatList.jsx';

const ChatScreen = ({navigation}) => {
    return (
        <ChatList navigation={navigation}/>
    );
}

export default ChatScreen;