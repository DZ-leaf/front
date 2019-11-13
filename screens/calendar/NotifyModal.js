import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Block, Button } from "galio-framework";
import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';

class NotifyModal extends Component {
    state = {
        data: [
            { label: '설정 안 함', value: 0 },
            { label: '일정 시작 시간', value: 1 },
            { label: '5분 전', value: 2 },
            { label: '10분 전', value: 3 },
            { label: '15분 전', value: 4 },
            { label: '30분 전', value: 5 },
            { label: '1시간 전', value: 6 },
            { label: '1일 전', value: 7 },
            { label: '직접 설정', value: 8 },
        ]
    }

    selectButton = (selected) => {
        this.props.setNotify(this.state.data[selected]);
        this.props.closeModal();
    }


    render() {
        return (
            <Block style={styles.container}>
                <Block style={styles.radioContainer}>
                    {this.state.data.map((list, index) => {
                        return (
                            <ListItem key={index}
                                onPress={
                                    () => { this.selectButton(index) }}>
                                <Left>
                                    <Text>{list.label}</Text>
                                </Left>
                                <Right>
                                    <Radio selected={this.props.selectedValue === index ? true : false}
                                        color='gray' selectedColor='#0B5713' />
                                </Right>
                            </ListItem>
                        )
                    })}
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f0f2',
    },
    radioContainer: {
        marginTop: 50,
        borderRadius: 30,
        paddingHorizontal: '5%',
        paddingBottom: '1%',
        paddingTop: '3%',
        backgroundColor: 'white',
    },
})
export default NotifyModal;