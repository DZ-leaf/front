import React, { useState } from 'react';
import { StyleSheet, Modal, Platform } from 'react-native';
import { Block } from "galio-framework";
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import FAB from 'react-native-fab';

import Icon from 'react-native-vector-icons/MaterialIcons';

import List from './CalendarList.jsx';
import AddEventModal from '../../screens/calendar/AddEventModal.jsx';

let calendarDate = moment();

const Calendars = ({ navigation }) => {

    const [selectDate, setSelectDate] = useState(calendarDate.format('YYYY-MM-DD'));
    const [modalVisible, setModalVisible] = useState(false);
    const [dateModalVisible, setDateModalVisible] = useState(false);

    const onDayPress = (date) => {
        calendarDate = moment(date.dateString);
        setSelectDate(calendarDate.format('YYYY-MM-DD'));
    }

    const modalVisibleSet = (visible) => {
        setModalVisible(visible)
    }

    const closeModal = (e) => {
        if (modalVisible) modalVisible(false)
    }

    const getDateTime = () => {
        week = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];

        selectDay = new Date(selectDate).getDay();

        day = week[selectDay] + ' ';
        date = calendarDate.format('MM월 DD일 ');
        time = moment().format('HH');

        startTime = Number(time) + 1;
        endTime = Number(time) + 2

        if (startTime > 24) startTime = startTime - 24;
        if (endTime > 24) endTime = endTime - 24;

        startTime %= 12;
        startTime = startTime || 12; // 0 => 12

        endTime %= 12;
        endTime = endTime || 12; // 0 => 12

        startAmpm = startTime >= 12 ? '오후 ' : '오전 ';
        endAmpm = endTime >= 12 ? '오후 ' : '오전 ';

        return ({ start: date + day + startAmpm + startTime + '시 00분', end: date + day + endAmpm + endTime + '시 00분' })
    }



    return (
        <Block style={styles.container} >
            <Block space-between style={styles.calendarContainer}>
                <Calendar
                    onDayPress={(day) => { onDayPress(day) }}
                    pagingEnabled
                    markedDates={{ [selectDate]: { selected: true, marked: true } }}
                    currnet={calendarDate}
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
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }} />
            </Block>
            <Block style={styles.listContainer}>
                <List navigation={navigation} />
            </Block>
            <FAB buttonColor="#0B5713" iconTextColor="#FFFFFF"
                onClickAction={() => { modalVisibleSet(!modalVisible) }} visible={true}
                iconTextComponent={<Icon name="add" />} snackOffset={Platform.OS == 'ios' ? 30 : 10} />
            <Modal middle visible={modalVisible} onRequestClose={() => { closeModal() }}>
                <AddEventModal closeModal={closeModal} day={getDateTime()}
                    selectedDate={selectDate} navigation={navigation} />
            </Modal>
        </Block>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F0F2',
    },
    calendarContainer: {
        flex: 5,
        borderBottomWidth: 2,
        borderColor: '#E5E7E9',
    },
    listContainer: {
        flex: 4,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: '5%',
        paddingBottom: '5%',
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
})

export default Calendars;