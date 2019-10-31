import React, { Component, useState } from 'react';
import { View, StyleSheet, Modal, Dimensions, TouchableOpacity, TextInput, Picker } from 'react-native';
import { Block, Button, Text, theme, Input } from "galio-framework";

import Icon from 'react-native-vector-icons/MaterialIcons';

import DateTimePickModal from './DateTimePickModal';
import AlarmModal from './AlarmModal';
import RepeatModal from './RepeatModal';

const { width } = Dimensions.get("screen");


class AddEventModal extends Component {
    state = {
        data: {
            title: '',
            startTime: '',
            endtime: '',
            selectedNotifyValue: { label: '10분 전', value: 3 },
            selectedRepeatValue: { label: '안 함', value: 0 },
            location: '',
            content: '',
        },
        modal: {
            dateTimeModal: false,
            notifyModal: false,
            repeatModal: false,    
        }        
    }
     
   

    // dateTimeModal
    setDateTimeModalVisible = (visible) => { this.setState({ modal: {...this.state.modal, dateTimeModal: visible }})}
    closeDateTimeModal = () => { this.setState({ modal: {...this.state.modal, dateTimeModal: false }})}

    // alarmModal
    setAlarmModalVisible = (visible) => { this.setState({ modal:{...this.state.modal, notifyModal: visible }})}
    closeAlarmModal = () => { this.setState({ modal: {...this.state.modal, notifyModal: false }})}

    // repeatModal
    setRepeatModalVisible = (visible) => { this.setState({ modal:{...this.state.modal, repeatModal: visible }})}
    closeRepeatModal = () => { this.setState({ modal: {...this.state.modal, repeatModal: false }})}


    setNotify = (selectValue) => {
        this.setState({ data:{...this.state.data, selectedNotifyValue: selectValue}})
    }

    setRepeat = (selectValue) => {
        this.setState({ data:{...this.state.data, selectedRepeatValue: selectValue}})
    }

    render() {
        // console.log(this.props.day);        

        return (
            <Block flex style={styles.container}>
                <Block style={styles.inputContainer}>
                    <TextInput placeholder='제목' style={[styles.input, { borderBottomWidth: 0 }]} fontSize={25} ></TextInput>
                </Block>
                <Block>
                    <TouchableOpacity style={styles.dateTime} onPress={() => { /* this.props.setModalVisible(this.props.visible) */
                     this.setDateTimeModalVisible(!this.state.modal.dateTimeModal) }}>
                        <Text style={[styles.text, {paddingLeft: '0%'}]}>시작          {this.props.day}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dateTime} onPress={() => {/*  this.props.setModalVisible(this.props.visible) */
                    this.setDateTimeModalVisible(!this.state.modal.dateTimeModal)} } >
                        <Text style={[styles.text, {paddingLeft: '0%'}]}>종료          {this.props.day}</Text>
                    </TouchableOpacity>
                </Block>
                <Modal middle  animationType="slide"
                        visible={this.state.modal.dateTimeModal} transparent={true} >
                            <DateTimePickModal closeModal={this.closeDateTimeModal} />
                        </Modal>

                <Block style={{ paddingTop: '5%' }}>
                    <TouchableOpacity /* style={styles.dateTime} */ onPress={() => { this.setAlarmModalVisible(!this.state.modal.notifyModal) }}>
                        <Block style={styles.note}>
                            <Icon size={20} style={{ marginRight: 10 }} name="notifications" />
                            <Text style={[styles.input, styles.text, {paddingTop:'4%'}]}>{this.state.data.selectedNotifyValue.label}</Text>
                        </Block>
                    </TouchableOpacity>
                    <Modal visible={this.state.modal.notifyModal} animationType="slide">
                        <AlarmModal closeModal={this.closeAlarmModal}  setNotify={this.setNotify} selectedValue={this.state.data.selectedNotifyValue.value}/>
                    </Modal>
                    <TouchableOpacity /* style={styles.dateTime} */ onPress={() => { this.setRepeatModalVisible(!this.state.modal.repeatModal) }}>
                    <Block style={styles.note}>
                        <Icon size={20} style={{ marginRight: 10 }} name="repeat" />
                        <Text style={[styles.input, styles.text, {paddingTop:'4%'}]}>{this.state.data.selectedRepeatValue.label}</Text>
                    </Block>
                    </TouchableOpacity>
                    <Modal visible={this.state.modal.repeatModal} animationType="slide">
                        <RepeatModal closeModal={this.closeRepeatModal} setRepeat={this.setRepeat} selectedValue={this.state.data.selectedRepeatValue.value}/>
                    </Modal>
                    <Block style={styles.note}>
                        <Icon size={20} style={{ marginRight: 10 }} name="location-on" />
                        <TextInput placeholder='위치' style={[styles.input, styles.text]}></TextInput>
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
        paddingTop: '10%',
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
        paddingBottom: '3%',
    },
    text: {
        fontSize: 17,
        paddingLeft: '5%',
    },
    note: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // borderWidth:1,
    },
})

export default AddEventModal;