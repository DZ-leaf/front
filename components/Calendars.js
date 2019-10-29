import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, FlatList } from 'react-native';
import { Block, Button, Text, theme, Input } from "galio-framework";
import { CalendarList, Calendar, Agenda } from 'react-native-calendars';
import moment from 'moment';

import List from './CalendarList';

const { width } = Dimensions.get("screen");
let calendarDate = moment();

class Calendars extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectDate: calendarDate.format('YYYY-MM-DD'),
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
            <Block style={styles.container} >
                 <Block space-between style={styles.calendarContainer}>
                    <Calendar
                        onDayPress={(day) => { this.onDayPress(day) }}
                        // hideExtraDays={false}
                        // horizontal pagingEnabled
                        markedDates={{
                            [this.state.selectDate]: { selected: true, marked: true }
                        }}
                        currnet={this.state.calendarDate}
                        theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#b6c1cd',   // 요일 글자 색
                            selectedDayBackgroundColor: '#0B5713',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#25A731',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: 'orange',
                            monthTextColor: 'black',
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
                        }} />
                </Block>
                <Block style={styles.listContainer}>
                    <List/>
                </Block>
                <Block style={styles.buttonContainer}>
                    <Button style={styles.button} textStyle={{fontSize: 20}}>+</Button>
                </Block> 
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    calendarContainer: {
        flex: 5,
        borderWidth: 1,
        borderColor: 'gray',
    },
    listContainer: {
        flex: 4,
    },
    buttonContainer: {
        flex: 1,
        // height: '15%',
        alignItems: 'flex-end',
        paddingRight: '5%',
        justifyContent: 'center',
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
})

export default Calendars;