import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars'
// import Calendar from '../components/Calendar'

class CalendarScreen extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                {/* <Text>일정</Text> */}
                <Calendar/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    }
})

export default CalendarScreen;