import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calendars from '../components/Calendars'

class CalendarScreen extends Component {
    
    render() {
        return (
            <View style={{flex:1}}>
                <Calendars/>
            </View>
        );
    }
}


export default CalendarScreen;