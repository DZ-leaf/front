import React, { Component, useState } from 'react';
import { View, StyleSheet, Modal, Dimensions, TouchableOpacity, TextInput, Picker } from 'react-native';
import { Block, Button, Text, theme, Input } from "galio-framework";

import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get("screen");

class AddEventModal extends Component {
    state = {
        modalVisible: false
    }

    render() {
        console.log(this.props.day);

        return (
            <Block flex style={styles.container}>
                <Block style={styles.inputContainer}>
                    <TextInput multiline={true} placeholder='제목' style={[styles.input, { borderBottomWidth: 0 }]} fontSize={25} ></TextInput>
                </Block>
                <Block>
                    <TouchableOpacity style={styles.dateTime} onPress={() => { this.props.setModalVisible(this.props.visible) }}>
                        <Text style={styles.text}>시작          {this.props.day}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dateTime} onPress={() => { this.props.setModalVisible(this.props.visible) }}>
                        <Text style={styles.text}>종료          {this.props.day}</Text>
                    </TouchableOpacity>
                </Block>
                <Block style={{ paddingTop: '5%' }}>
                <Block style={styles.note}>
                        <Icon size={20} style={{ marginRight: 10 }} name="repeat" />
                        <TextInput multiline={true} placeholder='반복' style={[styles.input, styles.text]}></TextInput>
                        {/* <Picker
                            selectedValue='안함'
                            style={{ height: 50, width: 100 }}
                            // onValueChange={(itemValue, itemIndex) =>
                               // this.setState({ language: itemValue })}
                            >
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker> */}
                    </Block>
                    <Block style={styles.note}>
                        <Icon size={20} style={{ marginRight: 10 }} name="location-on" />
                        <TextInput multiline={true} placeholder='위치' style={[styles.input, styles.text]}></TextInput>
                    </Block>
                    <Block style={styles.note}>
                        <Icon size={20} style={{ marginRight: 10 }} name="event-note" />
                        <TextInput multiline={true} placeholder='메모' style={[styles.input, styles.text]}></TextInput>
                    </Block>
                </Block>
                <Block style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={this.props.closeModal} textStyle={styles.buttonText} >취소</Button>
                    <Button style={styles.button} textStyle={styles.buttonText} >저장</Button>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F0F2',
        paddingTop: '5%',
        paddingHorizontal: '5%',
    },
    inputContainer: {
        paddingVertical: '5%',
    },
    input: {
        width: width - theme.SIZES.BASE * 6,
        height: 50,
        backgroundColor: '#f2f0f2',
        borderBottomColor: '#E5E7E9',
        borderBottomWidth: 2,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: '5%',
    },
    button: {
        width: width - theme.SIZES.BASE * 15,
        borderRadius: 20,
        elevation: 0.1,
        backgroundColor: '#f2f0f2',
    },
    buttonText: {
        color: '#0B5713',
        fontWeight: 'bold',
        fontSize: 20,
    },
    dateTime: {
        // paddingHorizontal: '5%',
        paddingBottom: '3%',
    },
    text: {
        fontSize: 17,
    },
    note: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // borderWidth:1,
    },
})

export default AddEventModal;