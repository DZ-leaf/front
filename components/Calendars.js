import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Block, Button, Text, theme, Input } from "galio-framework";
import { CalendarList, Calendar, Agenda } from 'react-native-calendars';
import moment from 'moment';

const { width } = Dimensions.get("screen");
let calendarDate = moment();
    
class Calendars extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selectDate: calendarDate.format('YYYY-MM-DD'),
            style: { select: true, marked: true }
        }

        this.onDayPress = this.onDayPress.bind(this)
    }
   

    onDayPress = (date) => {
        calendarDate = moment(date.dateString);
        this.setState({
            selectDate: calendarDate.format('YYYY-MM-DD')
        })
    }

    render() {
        return (
            <Block  style={styles.container} >
                <Block style={styles.calendarBorder}>
                     <Calendar  onDayPress={(day) => {console.log('selected day', day); this.onDayPress(day)}}
                     markedDates={{
                         [this.state.selectDate]: {selected: true, marked: true}
                     }}
                    currnet={this.state.calendarDate}
                    onPressArrowLeft={substractMonth => substractMonth()}
                     /* theme={styles.calendar} */ />
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // borderWidth: 3,
    },
    calendarBorder: {
        // flex: 1,
        borderWidth: 1,
    },
    /* calendar: {
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: 'orange',
        monthTextColor: 'blue',
        indicatorColor: 'blue',
        textDayFontFamily: 'monospace',
        textMonthFontFamily: 'monospace',
        textDayHeaderFontFamily: 'monospace',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16
    } */
})

export default Calendars;