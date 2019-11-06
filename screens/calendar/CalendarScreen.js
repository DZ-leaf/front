import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calendars from '../../components/calendar/Calendars';

class CalendarScreen extends Component {
    
    render() {
        return (
            <View style={{flex:1}}>
                <Calendars navigation={this.props.navigation}/>
            </View>
        );
    }
}

export default CalendarScreen;