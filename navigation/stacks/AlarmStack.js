import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../components/Header";
import transitionConfig from './transitionConfig';

import AlarmScreen from '../../screens/alarm/AlarmScreen';

const AlarmStack = createStackNavigator(
    {
        Alarm: {
            screen: AlarmScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header search options title="알림" navigation={navigation} />
            })
        },
    },
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);

export default AlarmStack;