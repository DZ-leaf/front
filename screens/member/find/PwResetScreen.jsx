import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, Alert } from 'react-native';
import { Block, Button, Text, theme, Input } from 'galio-framework';
import { withNavigation } from 'react-navigation'

const { width } = Dimensions.get("screen");

import { AjaxMember } from "../../../lib/memberUrl";

const IdConfirmScreen = (props) => {

    const [memberId, setMemberId] = useState('');
    const [memberPw, setMemberPw] = useState('');
    const [memberPwCheck, setMemberPwCheck] = useState('');

    const data = {
        "memberId": memberId,
        "memberPw": memberPw,
    }

    useEffect(() => {
        setMemberId(props.navigation.getParam('memberId'));
    }, [])

    const changePw = (data) => {
        const pwRe = RegExp(/^[a-zA-Z0-9]{4,12}$/);
        if (memberPw == '' || memberPwCheck == '') {
            Alert.alert('입력란이 비어있습니다')
        }
        else if (!pwRe.test(memberPw)) {
            Alert.alert('비밀번호를 다시 입력해 주세요')
        } else if (memberPw !== memberPwCheck) {
            Alert.alert('비밀번호가 서로 맞지 않습니다.')
        } else {
            return AjaxMember.changePw(data)
                .then((responseJson) => {
                    if (responseJson.message === "success") {
                        Alert.alert("비밀번호가 변경되었습니다.")
                        props.onClickListener()    //Components/Tabs _ order
                        props.navigation.navigate('Login')
                    } else if (responseJson.message === "fail") {
                        Alert.alert("이전 비밀번호와 같습니다")
                    }
                })
        }
    }

    return (
        <Block flex>
            <Block style={styles.container}>
                <Text style={styles.text}>비밀번호를 다시 설정해 주세요</Text>
                <Block style={styles.input}>
                    <Input placeholder='비밀번호 : 4~12자의 영문 대소문자와 숫자'
                        style={{ marginTop: -8 }} placeholderTextColor="#ADB5BD"
                        color={'black'} secureTextEntry={true}
                        onChangeText={(text) => setMemberPw(text)} />
                    <Input color={theme.COLORS.BLACK}
                        onChangeText={(text) => setMemberPwCheck(text)}
                        secureTextEntry={true}
                        placeholder="비밀번호 확인" placeholderTextColor="#ADB5BD"
                        right
                        icon={memberPwCheck ?
                            (memberPw === memberPwCheck ? 'check' : 'exclamation') : ''}
                        family="antdesign"
                        iconColor={memberPwCheck ?
                            (memberPw === memberPwCheck ? 'green' : 'red') : ''} />
                </Block>
                <Block middle>
                    <Button style={styles.button}
                        onPress={() => { changePw(data) }}
                        shadowless>확인</Button>
                </Block>
            </Block>
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
    text: {
        fontSize: 17,
    },
    input: {
        alignItems: 'center',
        marginTop: theme.SIZES.BASE * 2,
        width: width - theme.SIZES.BASE * 6,
    },
    button: {
        width: width - theme.SIZES.BASE * 6,
        height: theme.SIZES.BASE * 3,
        marginTop: 20,
    }
});

export default withNavigation(IdConfirmScreen);