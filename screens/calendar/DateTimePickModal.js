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
            <CalendarPicker/>
            <Block style={styles.buttonContainer}>
                <Button style={styles.button} textStyle={styles.buttonText} onPress={props.closeModal} shadowless>취소</Button>
                <Text style={{fontSize: 20}} color={'#E5E7E9'}>|</Text>
                <Button style={styles.button} textStyle={styles.buttonText} shadowless>완료</Button>
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
        borderRadius: 20,
        marginTop: 150,
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
        elevation:0.1,
        borderRadius: 20,
    },
    buttonText:{
        color: '#0B5713',
        fontWeight: 'bold',
    }
})

export default DateTimePickModal;