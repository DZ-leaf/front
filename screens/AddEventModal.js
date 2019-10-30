import React, { Component, useState } from 'react';
import { View, StyleSheet, Modal, Dimensions } from 'react-native';
import { Block, Button, Text, theme, Input } from "galio-framework";
import DateTimePickModal from './DateTimePickModal';

const { width, height } = Dimensions.get("screen");

class AddEventModal extends Component {
    state = {
        modalVisible: false
    }

    // setModalVisible = (visible) => {
    //     this.setState({
    //         modalVisible: visible
    //     })
    // }

    // closeModal = (e) => {
    //     if (modalVisible) {
    //         this.setState({
    //             modalVisible: false
    //         })
    //     }
    // }

    render() {               
        return (
            <Block flex style={styles.container}>
                <Block style={styles.inputContainer}>
                    <Input style={styles.input} color={'black'}></Input>
                </Block>
                <Block style={{ borderWidth: 2 }}>
                    <Button style={styles.button} onPress={this.props.closeModal}>취소</Button>
                    <Button style={styles.button}>저장</Button>
                </Block>

                <Button style={styles.button} 
                // onPress={() => { this.setModalVisible(!this.state.modalVisible) }}
                onPress={() => { this.props.setModalVisible(this.props.visible) }}
                >달력</Button>
                {/* <Modal middle visible={this.modalVisible} transparent={true} coverScreen={false}	>
                    <DateTimePickModal closeModal={this.closeModal} />
                </Modal> */}
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
 
    },
    inputContainer: {

    },
    input: {

    },
    button: {
        width: width - theme.SIZES.BASE * 10
    },
})

export default AddEventModal;