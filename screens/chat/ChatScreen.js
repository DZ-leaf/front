import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Block} from 'galio-framework';

import ChatListScreen from './ChatListScreen';

class ChatScreen extends Component {
    render() {
        return (
            <ChatListScreen/>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ChatScreen;