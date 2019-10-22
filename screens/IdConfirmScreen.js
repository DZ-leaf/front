import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Block, Button, Text, theme, Input } from 'galio-framework';

const { width } = Dimensions.get("screen");

class IdConfirmScreen extends Component {
    render() {
        const msg = {
            exist: '이메일 정보와 일치하는 아이디입니다.',
            nonExist: '아이디가 존재하지 않습니다.'
        }

        return (
            <Block flex>
                <Block style={styles.container}>
                <Text style={styles.text}>{true? msg.exist : msg.nonExist}</Text>
                <Block style={styles.msgContiner}>
                    <Text>userid</Text>
                </Block>
                <Button style={styles.button}>확인</Button>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F0F2F0',
        paddingTop: 50,
    },
    text: {
        fontSize: 17,
        // paddingHorizontal: 56,
    },
    msgContiner: {
        backgroundColor: "white",
        alignItems: 'center',
        marginTop: theme.SIZES.BASE * 2,
        paddingVertical: theme.SIZES.BASE * 2,
        width: width - theme.SIZES.BASE * 6,
        borderWidth: 1,
    },
    button: {
        width: width - theme.SIZES.BASE * 6,
        height: theme.SIZES.BASE * 3,
        marginTop: 20,
    }
});

export default IdConfirmScreen;