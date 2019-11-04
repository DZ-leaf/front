import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../components/Header";
import transitionConfig from './transitionConfig';

import ProfileScreen from "../../screens/profile/ProfileScreen";

const ProfileStack = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: ({ navigation }) => ({
                header: (
                    <Header white transparent title="프로필" iconColor={'#FFF'} navigation={navigation} />
                ),
                headerTransparent: true
            })
        }
    },
    {
        cardStyle: { backgroundColor: "#FFFFFF" },
        transitionConfig
    }
);

export default ProfileStack;
