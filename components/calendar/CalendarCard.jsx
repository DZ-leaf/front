import React, { useState } from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Text } from 'react-native';
import { Card, CardItem, Right, Left } from 'native-base';
import { Block } from "galio-framework";
import moment from 'moment';

import { Calendar } from 'react-native-calendars';

let calendarDate = moment();

const CalendarCard = ({ navigation, move }) => {

    const [selectDate, setSelectDate] = useState(calendarDate.format('YYYY-MM-DD'));
    const [modalVisible, setModalVisible] = useState(false);
    const [dateModalVisible, setDateModalVisible] = useState(false);


    const onDayPress = (date) => {
        calendarDate = moment(date.dateString);
        setSelectDate(calendarDate.format('YYYY-MM-DD'))
    }

    const modalVisibleSet = (visible) => {
        setModalVisible(visible)
    }

    const closeModal = (e) => {
        if (modalVisible) setModalVisible(false)
    }

    const getToday = () => {
        week = new Array('일', '월', '화', '수', '목', '금', '토');

        selectDay = new Date(selectDate).getDay();
        todayLabel = week[selectDay];

        return '(' + todayLabel + ')'
    }

    const getDateTime = () => {
        day = getToday();
        date = calendarDate.format('MM월 DD일 ');
        time = moment().format('  HH시 mm분');

        console.log(date + day + time);
        return (date + day + time)
    }

    return (
        <Block style={{ padding: '3%' }}>
            <Card>
                <CardItem header bordered style={styles.cardItem}>
                    <Left>
                        <Text>일정</Text>
                    </Left>
                    <Right>
                        <Text onPress={() => navigation.navigate(move)}
                            style={{ color: '#0B5713' }}>More...</Text>
                    </Right>
                </CardItem>
                <Block style={styles.container} >
                    <Block space-between style={styles.calendarContainer}>
                        <Calendar
                            onDayPress={(day) => { tonDayPress(day) }}
                            pagingEnabled
                            markedDates={{
                                [selectDate]: { selected: true, marked: true }
                            }}
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
                </Block>
            </Card>
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
        borderWidth: 1,
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
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
})

export default withNavigation(CalendarCard);