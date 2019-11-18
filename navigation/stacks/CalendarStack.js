import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../components/Header";
import transitionConfig from './transitionConfig';

import CalendarScreen from '../../screens/calendar/CalendarScreen.jsx';
import EventDetailModal from '../../screens/calendar/EventDetailModal.jsx';
// import EditEventModal from '../../screens/calendar/EditEventModal';

const CalendarStack = createStackNavigator(
    {
        Calendar: {
            screen: CalendarScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header search options title="일정" navigation={navigation} />
            })
        },
        Detail: {
           screen: EventDetailModal
        },
    },{
        mode: 'modal'
    },
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);

export default CalendarStack;
