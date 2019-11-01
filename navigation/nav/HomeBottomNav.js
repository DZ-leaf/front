import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from 'react-native-vector-icons/FontAwesome';

import { HomeStack, ChatStack, AlarmStack, SettingStack } from '../stacks'

const HomeBottomStack = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={'leaf'}
                    size={focused ? 25 : 20} color={tintColor} />
            )
        })
    },
    Chat: {
        screen: ChatStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={'comment'}
                    size={focused ? 22 : 19} color={tintColor} />
            )
        })
    },
    Alarm: {
        screen: AlarmStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={'bell'}
                    size={focused ? 22 : 19} color={tintColor} />
            )
        })
    },
    Setting: {
        screen: SettingStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={'gear'}
                    size={focused ? 25 : 20} color={tintColor} />
            )
        })
    },
}, {
    tabBarOptions: {
        showLabel: false, // hide labels
        activeTintColor: '#0B5713', // active icon color
        inactiveTintColor: '#7D7D7D',  // inactive icon color
    }
})

export default HomeBottomStack;