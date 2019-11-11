import React, { Component } from 'react';
import { Button, Icon } from 'native-base';
import { Animated, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View, Alert } from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';

class AlarmScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listType: 'FlatList',
            listViewData: Array(20)
                .fill('')
                .map((_, i) => ({ key: `${i}`, text: `item #${i}` })),
            sectionListData: Array(5)
                .fill('')
                .map((_, i) => ({
                    title: `title${i + 1}`,
                    data: [
                        ...Array(5)
                            .fill('')
                            .map((_, j) => ({
                                key: `${i}.${j}`,
                                text: `item #${j}`,
                            })),
                    ],
                })),
        };

        this.rowSwipeAnimatedValues = {};
        Array(20)
            .fill('')
            .forEach((_, i) => {
                this.rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
            });
    }

    closeRow(rowMap, rowKey) {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    }

    deleteRow(rowMap, rowKey) {
        Alert.alert("삭제하시겠습니까?")
        this.closeRow(rowMap, rowKey);
        const newData = [...this.state.listViewData];
        const prevIndex = this.state.listViewData.findIndex(
            item => item.key === rowKey
        );
        newData.splice(prevIndex, 1);
        this.setState({ listViewData: newData });
    }

    deleteSectionRow(rowMap, rowKey) {
        this.closeRow(rowMap, rowKey);
        const [section] = rowKey.split('.');
        const newData = [...this.state.sectionListData];
        const prevIndex = this.state.sectionListData[section].data.findIndex(
            item => item.key === rowKey
        );
        newData[section].data.splice(prevIndex, 1);
        this.setState({ sectionListData: newData });
    }

    onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        this.rowSwipeAnimatedValues[key].setValue(Math.abs(value));
    };

    render() {
        return (
            <View style={styles.container}>
                <SwipeListView data={this.state.listViewData}
                    renderItem={data => (
                        <TouchableHighlight
                            onPress={() => console.log('You touched me')}
                            style={styles.rowFront}
                            underlayColor={'#AAA'}>
                            <View>
                                <Text>
                                    I am {data.item.text} in a SwipeListView
                                </Text>
                            </View>
                        </TouchableHighlight>
                    )}
                    renderHiddenItem={(data, rowMap) => (
                        <View style={styles.rowBack}>
                            <TouchableOpacity
                                style={[styles.backRightBtn, styles.backRightBtnRight]}>
                                <Button style={{ height: 50 }} full danger 
                                onPress={() => this.deleteRow(rowMap, data.item.key)}>
                                    <Icon active name="trash" />
                                </Button>
                            </TouchableOpacity>
                        </View>
                    )}
                    leftOpenValue={0}
                    rightOpenValue={-70}
                    onSwipeValueChange={this.onSwipeValueChange}
                />
            </View>
        );
    }
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