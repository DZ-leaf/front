import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../components/Header";
import transitionConfig from './transitionConfig';

import ChatScreen from '../../screens/chat/ChatScreen';
// import ChatListScreen from '../../screens/chat/ChatListScreen';
import ChatRoomScreen from '../../screens/chat/ChatRoomScreen';

const ChatStack = createStackNavigator(
    {
        Chat: {
            screen: ChatScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header title="채팅방" back={true} navigation={navigation} />
            })
        },
        Room: {
            screen: ChatRoomScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header title="채팅" back={true} navigation={navigation} />
            })
        }
    },
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);

export default ChatStack;