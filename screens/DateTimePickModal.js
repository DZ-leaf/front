import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Block, Button, Text, theme, Input } from "galio-framework";
import CalendarPicker from 'react-native-calendar-picker';

const { width, height } = Dimensions.get("screen");

const DateTimePickModal = (props) => {

    // const [company, setCompany] = useState('');

    return (
        <Block felx style={styles.container}>
            {/* <Block styel={styles.calendarPicker} > */}
            <CalendarPicker />
            <Block style={styles.buttonContainer}>
                <Button style={styles.button} onPress={props.closeModal}>취소</Button>
                <Text>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                </Text>
                <Button style={styles.button}>완료</Button>
            {/* </Block> */}
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
        // backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 150,
        backgroundColor: 'white',
    },

    calendarPicker: {
        height: height,
        backgroundColor: 'white',
    },
    buttonContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    button: {
        // marginHorizontal: '5%',
        width: width - theme.SIZES.BASE * 20
    },
})

export default DateTimePickModal;