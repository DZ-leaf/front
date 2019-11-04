import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, FlatList, Modal } from 'react-native';
import { Block, Button, Text, theme, Input } from "galio-framework";
import { CalendarList, Calendar, Agenda } from 'react-native-calendars';
import moment from 'moment';

import List from './CalendarList';
import AddEventModal from '../screens/calendar/AddEventModal';

const { width, height } = Dimensions.get("screen");
let calendarDate = moment();

class Calendars extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectDate: calendarDate.format('YYYY-MM-DD'),
            modalVisible: false,
            dateModalVisible: false,
        }
    }

    onDayPress = (date) => {
        calendarDate = moment(date.dateString);
        
        this.setState({
            selectDate: calendarDate.format('YYYY-MM-DD')
        })
        
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }

    closeModal = (e) => {
        if (this.state.modalVisible) {
            this.setState({
                modalVisible: false
            })
        }
    }

    getDateTime = () => {
        week = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];

        selectDay = new Date(this.state.selectDate).getDay();

        day = week[selectDay] + ' ';       
        date = calendarDate.format('MM월 DD일 ');
        time = moment().format('HH');

        startTime = Number(time) + 1;      
        endTime = Number(time) + 2
        
        if(startTime > 24) startTime = startTime -24;
        if(endTime > 24) endTime = endTime -24;

        startTime %= 12;
        startTime = startTime || 12; // 0 => 12

        endTime %= 12;
        endTime = endTime || 12; // 0 => 12

        startAmpm = startTime >= 12 ? '오후 ' : '오전 ';
        endAmpm = endTime >= 12 ? '오후 ' : '오전 ';
        
        return({start: date + day + startAmpm +  startTime + '시 00분', end: date + day + endAmpm + endTime + '시 00분'})
    }

    render() {
        return (
            <Block style={styles.container} >
                <Block space-between style={styles.calendarContainer}>
                    <Calendar
                        onDayPress={(day) => { this.onDayPress(day); console.log(day);
                        }}
                        // hideExtraDays={false}
                        // horizontal pagingEnabled
                        pagingEnabled
                        markedDates={{
                            [this.state.selectDate]: { selected: true, marked: true }
                        }}
                        currnet={this.state.calendarDate}
                        onPressArrowLeft={substractMonth => substractMonth()}
                        onPressArrowRight={addMonth => addMonth()}
                        theme={{
                            backgroundColor: '#f2f0f2',
                            calendarBackground: '#f2f0f2',
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
<<<<<<< HEAD
=======
                            // textDayFontFamily: 'monospace',
                            // textMonthFontFamily: 'monospace',
                            // textDayHeaderFontFamily: 'monospace',
>>>>>>> e819538496823095fc450673fda0f0471b2d5c80
                            textDayFontWeight: '300',
                            textMonthFontWeight: 'bold',
                            textDayHeaderFontWeight: '300',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 16
                        }} />
                </Block>
                <Block style={styles.listContainer}>
                    <List />
                </Block>
                <Block style={styles.buttonContainer}>
                    <Button style={styles.button} textStyle={{ fontSize: 20 }}
                        onPress={() => this.setModalVisible(!this.state.modalVisible)} shadowless>+</Button>
                    <Modal middle visible={this.state.modalVisible} >
                        <AddEventModal closeModal={this.closeModal} day={this.getDateTime()} selectedDate={this.state.selectDate}/>
                    </Modal>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F0F2',
    },
    calendarContainer: {
        flex: 5,
        borderWidth: 1,
        borderColor: '#E5E7E9',
    },
    listContainer: {
        flex: 4,
        // paddingTop: '5%',
    },
    buttonContainer: {
        flex: 1,
        // height: '15%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: '5%',
        // paddingBottom: '5%',
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
})

export default Calendars;