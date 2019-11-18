import React, { useState } from 'react';
import { StyleSheet, Modal, Dimensions, TouchableOpacity, TextInput, Text } from 'react-native';
import { Block, Button, theme } from "galio-framework";

import Icon from 'react-native-vector-icons/MaterialIcons';

import DateTimePicker from 'react-native-modal-datetime-picker';
import NotifyModal from './NotifyModal';
import RepeatModal from './RepeatModal';

const { width } = Dimensions.get("screen");


const AddEventModal = (props) => {

    // const [title, setTitle] = useState('');
    const [startTime, setStartTime] = useState('2019-11-05');
    const [endTime, setEndTime] = useState('2019-11-05');
    const [selectedNotifyValue, setSelectedNotifyValue] = useState({ label: '10분 전', value: 3 });
    const [selectedRepeatValue, setSelectedRepeatValue] = useState({ label: '안 함', value: 0 });
    // const [location, setLocation] = useState('')
    // const [content, setContent] = useState('');

    const [dateTimeModal, setDateTimeModal] = useState(false);
    const [notifyModal, setNotifyModal] = useState(false);
    const [repeatModal, setRepeatModal] = useState(false);

    const [startTimeCheck, setStartTimeCheck] = useState(false)

    const getToday = (selectDate) => {
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
    const setDateTimeModalVisible = (visible) => { setDateTimeModal(visible) }
    const closeDateTimeModal = () => { setStartTimeCheck(false) }
    const datePicked = date => {
        startTimeCheck ? setStartTime(getToday(date)) : setEndTime(getToday(date));
        closeDateTimeModal();
    }

    // NotifyModal
    const setNotifyModalVisible = (visible) => { setNotifyModal(visible) }
    const closeNotifyModal = () => { setNotifyModal(false) }

    // repeatModal
    const setRepeatModalVisible = (visible) => { setRepeatModal(visible) }
    const closeRepeatModal = () => { setRepeatModal(false) }

    const setNotify = (selectValue) => { setSelectedNotifyValue(selectValue) }
    const setRepeat = (selectValue) => { setSelectedRepeatValue(selectValue) }

    return (
        <Block flex style={styles.container}>
            <Block style={styles.inputContainer}>
                <TextInput multiline={true} placeholder='제목'
                    style={[styles.input, { borderBottomWidth: 0 }]} fontSize={25} ></TextInput>
            </Block>
            <Block>
                <TouchableOpacity style={styles.dateTime}
                    onPress={() => { setDateTimeModalVisible(!dateTimeModal); setStartTimeCheck(true); }}>
                    <Text style={[styles.text, { paddingLeft: '0%' }]}>시작 {startTime == '' ? props.day.start : startTime}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dateTime}
                    onPress={() => { setDateTimeModalVisible(!dateTimeModal) }} >
                    <Text style={[styles.text, { paddingLeft: '0%' }]}>종료 {endTime == '' ? props.day.end : endTime}</Text>
                </TouchableOpacity>
            </Block>
            <Block>
                <DateTimePicker
                    isVisible={dateTimeModal} mode='datetime'
                    timePickerModeAndroid='spinner'
                    onConfirm={datePicked}
                    onCancel={closeDateTimeModal}
                    onDayPress={(day) => { console.log(day); }}
                    date={new Date(props.selectedDate)}
                    is24Hour={false}
                /></Block>

            <Block style={[{ paddingTop: '5%' }, { marginTop: 10 }]}>
                <TouchableOpacity onPress={() => { setNotifyModalVisible(!notifyModal) }}>
                    <Block style={styles.note}>
                        <Icon size={20} style={{ marginRight: 10 }} name="notifications" />
                        <Text style={[styles.input, styles.text, { paddingTop: '4%' }]}>{selectedNotifyValue.label}</Text>
                    </Block>
                </TouchableOpacity>
                <Modal visible={notifyModal} animationType="slide" onRequestClose={() => { closeNotifyModal() }}>
                    <NotifyModal closeModal={closeNotifyModal} setNotify={setNotify} selectedValue={selectedNotifyValue.value} />
                </Modal>
                <TouchableOpacity onPress={() => { setRepeatModalVisible(!repeatModal) }}>
                    <Block style={styles.note}>
                        <Icon size={20} style={{ marginRight: 10 }} name="repeat" />
                        <Text style={[styles.input, styles.text, { paddingTop: '4%' }]}>{selectedRepeatValue.label}</Text>
                    </Block>
                </TouchableOpacity>
                <Modal visible={repeatModal} animationType="slide" onRequestClose={() => { closeRepeatModal() }}>
                    <RepeatModal closeModal={closeRepeatModal} setRepeat={setRepeat} selectedValue={selectedRepeatValue.value} />
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
                <Button style={styles.button} onPress={props.closeModal} textStyle={styles.buttonText} shadowless>취소</Button>
                <Button style={styles.button} textStyle={styles.buttonText} shadowless onPress={() => { props.closeModal() }}>저장</Button>
            </Block>
        </Block>
    );
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

export default AddEventModal;