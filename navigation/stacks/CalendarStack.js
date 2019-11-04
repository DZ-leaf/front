import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../components/Header";
import transitionConfig from './transitionConfig';

import CalendarScreen from '../../screens/calendar/CalendarScreen';

const CalendarStack = createStackNavigator(
    {
        Setting: {
            screen: CalendarScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header search options title="일정" navigation={navigation} />
            })
        },
    },
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);

export default CalendarStack;
