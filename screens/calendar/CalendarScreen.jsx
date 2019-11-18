import React from 'react';
import { View } from 'react-native';
import Calendars from '../../components/calendar/Calendars.jsx';

const CalendarScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <Calendars navigation={navigation} />
        </View>
    );
}

export default CalendarScreen;