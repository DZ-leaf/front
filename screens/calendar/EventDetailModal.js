import React, { Component, useState } from 'react';
import { View, StyleSheet, Modal, Dimensions, TouchableOpacity, TextInput, Picker, Text, Platform } from 'react-native';
import { Block, Button, theme, Input } from "galio-framework";
import ActionSheet from 'react-native-actionsheet';

import Icon from 'react-native-vector-icons/MaterialIcons';

import DateTimePicker from 'react-native-modal-datetime-picker';

import EditEventModal from './EditEventModal';
import AlarmModal from './NotifyModal';
import RepeatModal from './RepeatModal';

const { width } = Dimensions.get("screen");


class EventDetailModal extends Component {

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
            editModal: false,
        },
        startTimeCheck: false,
    }

    showActionSheet = () => {
        this.ActionSheet.show()
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

    // alarmModal
    setAlarmModalVisible = (visible) => { this.setState({ modal: { ...this.state.modal, notifyModal: visible } }) }
    closeAlarmModal = () => { this.setState({ modal: { ...this.state.modal, notifyModal: false } }) }

    // repeatModal
    setRepeatModalVisible = (visible) => { this.setState({ modal: { ...this.state.modal, repeatModal: visible } }) }
    closeRepeatModal = () => { this.setState({ modal: { ...this.state.modal, repeatModal: false } }) }

    // editModal
    setEditModalVisible = (visible) => { this.setState({ modal: { ...this.state.modal, editModal: visible } }) }
    closeEditModal = () => { this.setState({ modal: { ...this.state.modal, editModal: false } }) }

    setNotify = (selectValue) => {
        this.setState({ data: { ...this.state.data, selectedNotifyValue: selectValue } })
    }

    setRepeat = (selectValue) => {
        this.setState({ data: { ...this.state.data, selectedRepeatValue: selectValue } })
    }

    deleteButton = () => {
        if (Platform.OS == 'android') {
            this.ActionSheet.show()
        } else {
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: ['삭제', '취소'],
                    cancelButtonIndex: 1,
                    destructiveButtonIndex: 0,
                },
                (index) => {
                    if (index == 0) {
                        this.props.navigation.navigate.goBack();
                    }
                }
            );
        }
    }

    render() {
        // console.log(this.props.day);        

        return (
            <Block flex style={styles.container}>
                <Block style={styles.inputContainer}>
                    <Text style={[styles.input, { borderBottomWidth: 0 }, { fontSize: 25 }]} >제목</Text>
                </Block>
                <Block>
                    <Text style={[styles.text, { paddingLeft: '0%' }, styles.dateTime]}>시작          {this.state.data.startTime == '' ? this.props.day.start : this.state.data.startTime}</Text>
                    <Text style={[styles.text, { paddingLeft: '0%' }, styles.dateTime]}>종료          {this.state.data.endTime == '' ? this.props.day.end : this.state.data.endTime}</Text>
                </Block>
                <Block>
                    <DateTimePicker isVisible={this.state.modal.dateTimeModal} mode='datetime' timePickerModeAndroid='spinner'

                        onConfirm={this.datePicked}
                        onCancel={this.closeDateTimeModal}
                        onDayPress={(day) => { console.log(day); }}
                        date={new Date(this.props.selectedDate)}
                        is24Hour={false}
                    />
                </Block>

                <Block style={[{ paddingTop: '5%' }, { marginTop: 10 }]}>
                    <Block style={styles.note}>
                        <Icon size={20} style={{ marginRight: 10 }} name="notifications" />
                        <Text style={[styles.input, styles.text, { paddingTop: '4%' }]}>{this.state.data.selectedNotifyValue.label}</Text>
                    </Block>
                    <Block style={styles.note}>
                        <Icon size={20} style={{ marginRight: 10 }} name="repeat" />
                        <Text style={[styles.input, styles.text, { paddingTop: '4%' }]}>{this.state.data.selectedRepeatValue.label}</Text>
                    </Block>
                    <Block style={styles.note}>
                        <Icon size={20} style={{ marginRight: 10 }} name="location-on" />
                        <Text multiline={true} placeholder='위치' style={[styles.input, styles.text]} ></Text>
                    </Block>
                    <Block style={styles.note}>
                        <Icon size={20} style={{ marginRight: 10 }} name="event-note" />
                        <Text multiline={true} placeholder='메모' style={[styles.input, styles.text]} ></Text>
                    </Block>
                </Block>
                <Block style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={this.props.closeModal} textStyle={styles.buttonText} shadowless onPress={() => { this.setEditModalVisible(!this.state.modal.editModal) }} >수정</Button>
                    <Button style={styles.button} textStyle={styles.buttonText} shadowless onPress={this.showActionSheet} >삭제</Button>
                    <ActionSheet
                        ref={o => this.ActionSheet = o}
                        title={'일정을 삭제할까요?'}
                        options={['삭제', '취소']}
                        cancelButtonIndex={1}
                        destructiveButtonIndex={0}
                        onPress={(index) => {
                            if (index == 0) {
                                this.props.navigation.goBack();
                            }
                        }}
                    />

                    <Modal visible={this.state.modal.editModal} animationType="slide" onRequestClose={() => { this.closeNotifyModal() }}>
                        <EditEventModal closeModal={this.closeEditModal} navigation={this.props.navigation} />
                    </Modal>
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
        paddingBottom: '5%',
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

export default EventDetailModal;