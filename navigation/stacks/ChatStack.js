import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../components/Header";
import transitionConfig from './transitionConfig';

import ChatScreen from '../../screens/chat/ChatScreen';

const ChatStack = createStackNavigator(
    {
        Chat: {
            screen: ChatScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header title="채팅" navigation={navigation} />
            })
        }
    },
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);

export default ChatStack;