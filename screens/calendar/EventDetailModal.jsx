import React, { useState } from 'react';
import { StyleSheet, Modal, Dimensions, Text, Platform } from 'react-native';
import { Block, Button, theme } from "galio-framework";
import ActionSheet from 'react-native-actionsheet';

import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import EditEventModal from './EditEventModal.jsx';

const { width } = Dimensions.get("screen");

const EventDetailModal = (props) => {

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
    const [editModal, setEditModal] = useState(false);

    const [startTimeCheck, setStartTimeCheck] = useState(false)

    const showActionSheet = () => {
        this.ActionSheet.show()
    }

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

    const closeDateTimeModal = () => {
        setStartTimeCheck(false);
        setDateTimeModal(false);
    }

    const datePicked = date => {
        startTimeCheck ? setStartTime(getToday(date)) : setEndTime(getToday(date))
        closeDateTimeModal();
    }

    // alarmModal
    const setAlarmModalVisible = (visible) => { setNotifyModal(visible) }
    const closeAlarmModal = () => { setNotifyModal(false) }

    // repeatModal
    const setRepeatModalVisible = (visible) => { setRepeatModal(visible) }
    const closeRepeatModal = () => { setRepeatModal(false)}

    // editModal
    const setEditModalVisible = (visible) => { setEditModal(visible)}
    const closeEditModal = () => {setEditModal(false) }

    const setNotify = (selectValue) => { setSelectedNotifyValue(selectValue);}

    const setRepeat = (selectValue) => { setSelectedRepeatValue(selectValue) }

    const deleteButton = () => {
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
                        props.navigation.navigate.goBack();
                    }
                }
            );
        }
    }

    return (
        <Block flex style={styles.container}>
            <Block style={styles.inputContainer}>
                <Text style={[styles.input, { borderBottomWidth: 0 }, { fontSize: 25 }]} >제목</Text>
            </Block>
            <Block>
                <Text style={[styles.text, { paddingLeft: '0%' }, styles.dateTime]}>시작 {startTime == '' ? props.day.start : startTime}</Text>
                <Text style={[styles.text, { paddingLeft: '0%' }, styles.dateTime]}>종료 {endTime == '' ? props.day.end : endTime}</Text>
            </Block>
            <Block>
                <DateTimePicker isVisible={dateTimeModal} mode='datetime' timePickerModeAndroid='spinner'
                    onConfirm={datePicked}
                    onCancel={closeDateTimeModal}
                    onDayPress={(day) => { console.log(day); }}
                    date={new Date(props.selectedDate)}
                    is24Hour={false}
                />
            </Block>

            <Block style={[{ paddingTop: '5%' }, { marginTop: 10 }]}>
                <Block style={styles.note}>
                    <Icon size={20} style={{ marginRight: 10 }} name="notifications" />
                    <Text style={[styles.input, styles.text, { paddingTop: '4%' }]}>{selectedNotifyValue.label}</Text>
                </Block>
                <Block style={styles.note}>
                    <Icon size={20} style={{ marginRight: 10 }} name="repeat" />
                    <Text style={[styles.input, styles.text, { paddingTop: '4%' }]}>{selectedRepeatValue.label}</Text>
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
                <Button style={styles.button} onPress={props.closeModal} textStyle={styles.buttonText} shadowless onPress={() => { setEditModalVisible(!editModal) }} >수정</Button>
                <Button style={styles.button} textStyle={styles.buttonText} shadowless onPress={showActionSheet} >삭제</Button>
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title={'일정을 삭제할까요?'}
                    options={['삭제', '취소']}
                    cancelButtonIndex={1}
                    destructiveButtonIndex={0}
                    onPress={(index) => {
                        if (index == 0) {
                            props.navigation.goBack();
                        }
                    }}
                />

                <Modal visible={editModal} animationType="slide" onRequestClose={closeEditModal}>
                    <EditEventModal closeModal={closeEditModal} navigation={props.navigation} />
                </Modal>
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