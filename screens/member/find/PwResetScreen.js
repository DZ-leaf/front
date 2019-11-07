import React, { Component } from 'react';
import { StyleSheet, Dimensions, Alert } from 'react-native';
import { Block, Button, Text, theme, Input } from 'galio-framework';
import { withNavigation } from 'react-navigation'

const { width } = Dimensions.get("screen");

import { AjaxUser } from "../../../lib/url/member/userUrl";

class IdConfirmScreen extends Component {
    state = {
        data: {
            memberId: '',
            memberPw: '',
        },
        memberPwCheck: '',
    }

    componentDidMount() {
        console.log(this.props.navigation.getParam('memberId'));
        //      this.props.onClickListener()
        this.setState({
            data: {
                ...this.state.data,
                memberId: this.props.navigation.getParam('memberId'),
            }
        })
    }

    changePw = (data, navigation) => {
        const pwRe = RegExp(/^[a-zA-Z0-9]{4,12}$/);
        if (this.state.data.memberPw == '' || this.state.data.memberPwCheck == '') {
            Alert.alert('입력란이 비어있습니다')
        }
        else if (!pwRe.test(this.state.data.memberPw)) {
            Alert.alert('비밀번호를 다시 입력해 주세요')
        } else if (this.state.data.memberPw !== this.state.memberPwCheck) {
            Alert.alert('비밀번호가 서로 맞지 않습니다.')
        } else {
            return AjaxUser.changePw(data)
                .then((responseJson) => {
                    console.log(responseJson.message);
                    if (responseJson.message === "success") {
                        Alert.alert("비밀번호가 변경되었습니다.")
                        this.props.onClickListener()    //Components/Tabs _ order 초기화
                        navigation.navigate('Login')
                    } else if (responseJson.message === "fail") {
                        Alert.alert("이전 비밀번호와 같습니다")
                    }
                })
        }
    }

    render() {
        const { navigation } = this.props

        return (
            <Block flex>
                <Block style={styles.container}>
                    <Text style={styles.text}>비밀번호를 다시 설정해 주세요</Text>
                    <Block style={styles.input}>
                        <Input placeholder='비밀번호 : 4~12자의 영문 대소문자와 숫자'
                            style={{ marginTop: -8 }} placeholderTextColor="#ADB5BD"
                            color={'black'} secureTextEntry={true}
                            onChangeText={(text) => { this.setState({ data: { ...this.state.data, memberPw: text } }) }} />
                        <Input color={theme.COLORS.BLACK}
                            onChangeText={(text) => { this.setState({ memberPwCheck: text }) }}
                            secureTextEntry={true}
                            placeholder="비밀번호 확인" placeholderTextColor="#ADB5BD"
                            right
                            icon={this.state.memberPwCheck ?
                                (this.state.data.memberPw === this.state.memberPwCheck ? 'check' : 'exclamation') : ''}
                            family="antdesign"
                            iconColor={this.state.memberPwCheck ?
                                (this.state.data.memberPw === this.state.memberPwCheck ? 'green' : 'red') : ''} />
                    </Block>
                    <Block middle>
                        <Button style={styles.button}
                            onPress={() => { this.changePw(this.state.data, navigation) }}
                            shadowless>확인</Button>
                    </Block>
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