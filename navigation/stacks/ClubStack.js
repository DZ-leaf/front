import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../components/Header";
import transitionConfig from './transitionConfig';

import ClubScreen from '../../screens/club/ClubScreen';

const ClubStack = createStackNavigator(
    {
        Setting: {
            screen: ClubScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header search options title="동아리" navigation={navigation} />
            })
        },
    },
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);

export default ClubStack;