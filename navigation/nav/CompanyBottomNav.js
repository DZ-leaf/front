import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { CompanyStack } from '../stacks'

import CompanyBoardStack from '../stacks/company/CompanyBoardStack';
import CompanyGalleryStack from '../stacks/company/CompanyGalleryStack';
import CompanyCalendarStack from '../stacks/company/CompanyCalendarStack';
import CompanyAddressStack from '../stacks/company/CompanyAddressStack';

const CompanyBottomStack = createBottomTabNavigator({
    Company: {
        screen: CompanyStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={'desktop-mac'}
                    size={focused ? 22 : 19} color={tintColor} />
            )
        })
    },
    CompanyBoard: {
        screen: CompanyBoardStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={'bulletin-board'}
                    size={focused ? 22 : 19} color={tintColor} />
            )
        })
    },
    CompanyGallery: {
        screen: CompanyGalleryStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={'camera-image'}
                    size={focused ? 22 : 19} color={tintColor} />
            )
        })
    },
    CompanyCalendar: {
        screen: CompanyCalendarStack,
        navigationOptions: () => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name={'calendar'}
                    size={focused ? 22 : 19} color={tintColor} />
            )
        })
    },
    CompanyAddress: {
        screen: CompanyAddressStack,
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

export default CompanyBottomStack;