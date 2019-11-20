import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../components/Header";
import transitionConfig from './transitionConfig';

import ChatScreen from '../../screens/chat/ChatScreen.jsx';
import ChatRoomScreen from '../../screens/chat/ChatRoomScreen.jsx';

const ChatStack = createStackNavigator(
    {
        Chat: {
            screen: ChatScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header title="채팅방" navigation={navigation} />
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