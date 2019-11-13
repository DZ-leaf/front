import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { GroupStack } from '../stacks'

import GroupBoardStack from '../stacks/group/GroupBoardStack';
import GroupGalleryStack from '../stacks/group/GroupGalleryStack';
import GroupCalendarStack from '../stacks/group/GroupCalendarStack';
import GroupAddressStack from '../stacks/group/GroupAddressStack';

const GroupBottomStack = createBottomTabNavigator({
    Group: {
        screen: GroupStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={'account-multiple'}
                    size={focused ? 22 : 19} color={tintColor} />
            )
        })
    },
    GroupBoard: {
        screen: GroupBoardStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={'bulletin-board'}
                    size={focused ? 22 : 19} color={tintColor} />
            )
        })
    },
    GroupGallery: {
        screen: GroupGalleryStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={'camera-image'}
                    size={focused ? 22 : 19} color={tintColor} />
            )
        })
    },
    GroupCalendar: {
        screen: GroupCalendarStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={'calendar'}
                    size={focused ? 22 : 19} color={tintColor} />
            )
        })
    },
    GroupAddress: {
        screen: GroupAddressStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={'account-box-multiple'}
                    size={focused ? 22 : 19} color={tintColor} />
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

export default GroupBottomStack;