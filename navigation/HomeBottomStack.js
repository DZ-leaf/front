import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { argonTheme } from "../constants";

import {
    ProfileStack,
    HomeStack,
    GroupStack,
    CompanyStack,
    ClubStack,
    CalendarStack,
    ChatStack,
    SettingStack,
    AlarmStack,
  } from './Stacks.js';

const HomeBottomStack = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={focused ? 'home' : 'home-outline'}
                    size={focused ? 30 : 25} color={tintColor} />
            )
        })
    },
    Chat: {
        screen: ChatStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={focused ? 'comment' : 'comment-outline'}
                    size={focused ? 30 : 25} color={tintColor} />
            )
        })
    },
    Alarm: {
        screen: AlarmStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={focused ? 'bell' : 'bell-outline'}
                    size={focused ? 30 : 25} color={tintColor} />
            )
        })
    },
    Setting: {
        screen: SettingStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={focused ? 'settings' : 'settings-outline'}
                    size={focused ? 30 : 25} color={tintColor} />
            )
        })
    },
}, {
    tabBarOptions: {
        showLabel: false, // hide labels
        activeTintColor: argonTheme.COLORS.PRIMARY, // active icon color
        inactiveTintColor: '#7D7D7D',  // inactive icon color
    }
})

export {
    HomeBottomStack,
}