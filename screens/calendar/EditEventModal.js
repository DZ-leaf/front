import React, { Component, useState } from 'react';
import { View, StyleSheet, Modal, Dimensions, TouchableOpacity, TextInput, Picker, Text } from 'react-native';
import { Block, Button, theme, Input } from "galio-framework";


import Icon from 'react-native-vector-icons/MaterialIcons';

import DateTimePicker from 'react-native-modal-datetime-picker';
import NotifyModal from './NotifyModal';
import RepeatModal from './RepeatModal';

const { width } = Dimensions.get("screen");


class EditEventModal extends Component {

    state = {
        data: {
            title: '',
            startTime: '2019-11-05',
            endTime: '2019-11-05',
            selectedNotifyValue: { label: '10분 전', value: 3 },
            selectedRepeatValue: { label: '안 함', value: 0 },
            location: '',
            content: '',
        },
        modal: {
            dateTimeModal: false,
            notifyModal: false,
            repeatModal: false,
        },
        startTimeCheck: false,
    }

    getToday = (selectDate) => {
        const week = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
        const day = week[selectDate.getDay()];

        const month = selectDate.getMonth() + 1;
        const date = selectDate.getDate();
        let hour = selectDate.getHours();
        let minute = selectDate.getMinutes();
        const ampm = hour >= 12 ? '오후' : '오전';

        hour %= 12;
        hour = hour || 12; // 0 => 12

        minute = minute < 10 ? '0' + minute : minute;

        return (month + '월 ' + date + '일 ' + day + ' ' + ampm + ' ' + hour + '시 ' + minute + '분')
    }

    // dateTimeModal
    setDateTimeModalVisible = (visible) => { this.setState({ modal: { ...this.state.modal, dateTimeModal: visible } }) }
    closeDateTimeModal = () => { this.setState({ modal: { ...this.state.modal, dateTimeModal: false }, startTimeCheck: false }) }
    datePicked = date => {
        this.state.startTimeCheck ? this.setState({ data: { ...this.state.data, startTime: this.getToday(date) } }) : this.setState({ data: { ...this.state.data, endTime: this.getToday(date) } });
        this.closeDateTimeModal();
    }

    // NotifyModal
    setNotifyModalVisible = (visible) => { this.setState({ modal: { ...this.state.modal, notifyModal: visible } }) }
    closeNotifyModal = () => { this.setState({ modal: { ...this.state.modal, notifyModal: false } }) }

    // repeatModal
    setRepeatModalVisible = (visible) => { this.setState({ modal: { ...this.state.modal, repeatModal: visible } }) }
    closeRepeatModal = () => { this.setState({ modal: { ...this.state.modal, repeatModal: false } }) }


    setNotify = (selectValue) => {
        this.setState({ data: { ...this.state.data, selectedNotifyValue: selectValue } })
    }

    setRepeat = (selectValue) => {
        this.setState({ data: { ...this.state.data, selectedRepeatValue: selectValue } })
    }

    render() {
        let selectDate = this.state.startTimeCheck? this.state.data.startTime : this.state.data.endTime;

        return (
            <Block flex style={styles.container}>
                <Block style={styles.inputContainer}>
                    <TextInput multiline={true} placeholder='제목' style={[styles.input, { borderBottomWidth: 0 }]} fontSize={25} ></TextInput>
                </Block>
                <Block>
                    <TouchableOpacity style={styles.dateTime} onPress={() => { /* this.props.setModalVisible(this.props.visible) */
                        this.setDateTimeModalVisible(!this.state.modal.dateTimeModal); this.setState({ startTimeCheck: true });
                    }}>
                        <Text style={[styles.text, { paddingLeft: '0%' }]}>시작          {this.state.data.startTime == '' ? this.props.day.start : this.state.data.startTime}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dateTime} onPress={() => {/*  this.props.setModalVisible(this.props.visible) */
                        this.setDateTimeModalVisible(!this.state.modal.dateTimeModal)
                    }} >
                        <Text style={[styles.text, { paddingLeft: '0%' }]}>종료          {this.state.data.endTime == '' ? this.props.day.end : this.state.data.endTime}</Text>
                    </TouchableOpacity>
                </Block>
                <Block>
                    <DateTimePicker isVisible={this.state.modal.dateTimeModal} mode='datetime' timePickerModeAndroid='spinner'
                        onConfirm={this.datePicked}
                        onCancel={this.closeDateTimeModal}
                        onDayPress={(day) => { console.log(day); }}
                        date={new Date(selectDate)}
                        is24Hour={false} 
                        onRequestClose={() => {this.closeDateTimeModal()}}     
                    />
                </Block>

                <Block style={[{ paddingTop: '5%' }, { marginTop: 10 }]}>
                    <TouchableOpacity  style={styles.dateTime}  onPress={() => { this.setNotifyModalVisible(!this.state.modal.notifyModal) }}>
                        <Block style={styles.note}>
                            <Icon size={20} style={{ marginRight: 10 }} name="notifications" />
                            <Text style={[styles.input, styles.text, { paddingTop: '4%' }]}>{this.state.data.selectedNotifyValue.label}</Text>
                        </Block>
                    </TouchableOpacity>
                    <Modal visible={this.state.modal.notifyModal} animationType="slide" onRequestClose={() => { this.closeNotifyModal() }}>
                        <NotifyModal closeModal={this.closeNotifyModal} setNotify={this.setNotify} selectedValue={this.state.data.selectedNotifyValue.value} />
                    </Modal>
                    <TouchableOpacity  style={styles.dateTime}  onPress={() => { this.setRepeatModalVisible(!this.state.modal.repeatModal) }}>
                        <Block style={styles.note}>
                            <Icon size={20} style={{ marginRight: 10 }} name="repeat" />
                            <Text style={[styles.input, styles.text, { paddingTop: '4%' }]}>{this.state.data.selectedRepeatValue.label}</Text>
                        </Block>
                    </TouchableOpacity>
                    <Modal visible={this.state.modal.repeatModal} animationType="slide" onRequestClose={() => { this.closeRepeatModal() }}>
                        <RepeatModal closeModal={this.closeRepeatModal} setRepeat={this.setRepeat} selectedValue={this.state.data.selectedRepeatValue.value} />
                    </Modal>
                    <Block style={styles.note}>
                        <Icon size={20} style={{ marginRight: 10 }} name="location-on" />
                        <TextInput multiline={true} placeholder='위치' style={[styles.input, styles.text]} ></TextInput>
                    </Block>
                    <Block style={styles.note}>
                        <Icon size={20} style={{ marginRight: 10 }} name="event-note" />
                        <TextInput multiline={true} placeholder='메모' style={[styles.input, styles.text]} ></TextInput>
                    </Block>
                </Block>
                <Block style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={this.props.closeModal} textStyle={styles.buttonText} shadowless onPress={() => { this.props.closeModal() }}>취소</Button>
                    <Button style={styles.button} textStyle={styles.buttonText} shadowless onPress={() => { this.props.navigation.goBack(); this.props.closeModal(); }}>저장</Button>
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
        justifyContent: 'center',
        marginVertical: 20,
    },
    input: {
        width: width - theme.SIZES.BASE * 6,
        height: 50,
        backgroundColor: '#f2f0f2',
        borderBottomColor: '#E5E7E9',
        borderBottomWidth: 2,
        justifyContent: 'center',
        paddingTop: '4%',
        textAlignVertical: 'top',
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
        fontSize: 18,
        paddingLeft: '5%',
    },
    note: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default EditEventModal;