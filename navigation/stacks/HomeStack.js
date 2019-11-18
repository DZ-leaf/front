import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../components/Header";
import transitionConfig from './transitionConfig';

import HomeScreen from "../../screens/home/HomeScreen.jsx";

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header search options title="홈" navigation={navigation} />
            })
        },
    },
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);

export default HomeStack;