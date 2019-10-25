import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Block, Button, theme, Input, Text } from 'galio-framework';

const { width, height } = Dimensions.get("screen");

const ProfileEditModal = (props) => {
    return (
        <Block flex style={styles.container}>
            <Text>
                프로필 수정
            </Text>
            <Button onPress={props.closeModal} shadowless>닫기</Button>
        </Block>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F0F2F0',
        paddingTop: 50,
    },
    button: {
        width: width - theme.SIZES.BASE * 6,
        height: theme.SIZES.BASE * 3,
    },
    inputs: {
        marginTop: '-4%',
        borderRadius: 0,
    },
    inputButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 1.43
    },
    item: {
        backgroundColor: 'white',
        height: height * 0.05,
        paddingTop: '2.5%',
        paddingLeft: '4%',
        marginVertical: '1%',
    },
});

export default ProfileEditModal;