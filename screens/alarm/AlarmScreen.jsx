import React, { useState } from 'react';
import { Button, Icon } from 'native-base';
import { Animated, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View, Alert } from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';

const AlarmScreen = () => {

    const [listViewData, setListViewData] = useState(
        Array(10).fill('').map((_, i) => ({ key: `${i}`, text: `item #${i}` })))

    const rowSwipeAnimatedValues = {};

    Array(20)
        .fill('')
        .forEach((_, i) => {rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0)});

    const closeRow = (rowMap, rowKey) =>{
        if (rowMap[rowKey])
            rowMap[rowKey].closeRow();
    }

    const deleteRow = (rowMap, rowKey) => {
        Alert.alert(
            '삭제하시겠습니까?',
            '삭제하시면 알람을 볼 수 없습니다',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => {
                        closeRow(rowMap, rowKey);
                    }
                },
                {
                    text: 'OK',
                    onPress: () => {
                        closeRow(rowMap, rowKey);
                        onDelete(rowKey);
                    }
                },
            ],
            { cancelable: false },
        );
    }

    const onDelete = (rowKey) => {
        const newData = [...listViewData];
        const prevIndex = listViewData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListViewData(newData);
    }

    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        rowSwipeAnimatedValues[key].setValue(Math.abs(value));
    };

    const listPress = (data) => {
        console.log(data)
    }

    return (
        <View style={styles.container}>
            <SwipeListView data={listViewData}
                renderItem={data => (
                    <TouchableHighlight
                        onPress={() => listPress(data.item.text)}
                        style={styles.rowFront}
                        underlayColor={'#AAA'}>
                        <View>
                            <Text>
                                알람 내용 {data.item.text}
                            </Text>
                        </View>
                    </TouchableHighlight>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.rowBack}>
                        <TouchableOpacity
                            style={[styles.backRightBtn, styles.backRightBtnRight]}>
                            <Button style={{ height: 50 }} full danger
                                onPress={() => deleteRow(rowMap, data.item.key)}>
                                <Icon active name="trash" />
                            </Button>
                        </TouchableOpacity>
                    </View>
                )}
                leftOpenValue={0}
                rightOpenValue={-70}
                onSwipeValueChange={onSwipeValueChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    standalone: {
        marginTop: 30,
        marginBottom: 30,
    },
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
        height: 50,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 70,
    },
    backRightBtnRight: {
        backgroundColor: 'white',
        right: 0,
    },
});

export default AlarmScreen;