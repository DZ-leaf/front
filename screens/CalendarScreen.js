import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Block, Button, Text, theme, Input } from "galio-framework";
// import { Calendar } from 'react-native-calendars'
import Calendars from '../components/Calendars'
// import {Calendars} from '../components/Calendar/CalendarMain'

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