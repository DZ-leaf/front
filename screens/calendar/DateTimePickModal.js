import React, { Component, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Block, Button, Text, theme, Input } from "galio-framework";
import CalendarPicker from 'react-native-calendar-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
// import TimePicker from './TimePicker';
import moment from 'moment';

const { width, height } = Dimensions.get("screen");

const DateTimePickModal = (props) => {

    const { isDateTimePickerVisible, setIsDateTimePickerVisible } = useState(false)

    showDateTimePicker = () => {
        setIsDateTimePickerVisible(true);
    };

    hideDateTimePicker = () => {
        setIsDateTimePickerVisible(false);
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
    };

    // const [company, setCompany] = useState('');
    console.log(props.selectedDate);

    return (
        <Block felx style={styles.container}>
            <Block styel={styles.calendarPicker} >
                <Block>
                <CalendarPicker initialDate={moment(props.selectedDate)} />
                </Block>
                <Block>
                <DateTimePicker  isVisible={true} mode='time' timePickerModeAndroid='spinner' />
                </Block>
                <Block style={styles.buttonContainer}>
                    <Button style={styles.button} textStyle={styles.buttonText} onPress={props.closeModal} shadowless>취소</Button>
                    <Text style={{ fontSize: 20 }} color={'#E5E7E9'}>|</Text>
                    <Button style={styles.button} textStyle={styles.buttonText} shadowless>완료</Button>
                </Block>
            </Block>
        </Block>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        // // width: width * 0.8,
        // marginHorizontal: '10%',
        // // marginVertical: '20%',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 150,
        borderColor: '#E5E7E9',
        backgroundColor: 'white',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    button: {
        marginHorizontal: '5%',
        width: width - theme.SIZES.BASE * 16,
        backgroundColor: 'white',
        elevation: 0.1,
        borderRadius: 20,
    },
    buttonText: {
        color: '#0B5713',
        fontWeight: 'bold',
    }
})

export default DateTimePickModal;