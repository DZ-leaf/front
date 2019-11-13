import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../../components/Header";
import transitionConfig from '../transitionConfig';

import { GroupCalendar } from '../../../screens/group';

const GroupCalendarStack = createStackNavigator(
    {
        GroupCalendar: {
            screen: GroupCalendar,
            navigationOptions: ({ navigation }) => ({
                header: <Header title="그룹" navigation={navigation} />
            })
        },
    },  
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);

export default GroupCalendarStack;