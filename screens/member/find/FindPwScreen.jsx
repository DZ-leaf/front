import React, { useState } from "react";
import { StyleSheet, StatusBar, Dimensions, Alert } from "react-native";
import { Block, Button, Text, theme, Input } from "galio-framework";
import { withNavigation } from 'react-navigation';

const { width } = Dimensions.get("screen");

import { AjaxMember } from "../../../lib/member/memberUrl";

const FindPwScreen = ({ navigation }) => {

  const [memberId, setMemberId] = useState('');
  const [email, setEmail] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);
  const [authNum, setAuthNum] = useState('');
  const [authNumCheck, setAuthNumCheck] = useState('');
  const [authCheck, setAuthCheck] = useState(false);

  const data = {
    "memberId": memberId,
    "email": email,
  }

  const sendEmail = (data) => {
    var re = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (data.email == '' || data.memberId == '') {
      Alert.alert("입력란이 비어있습니다");
    } else if (!re.test(data.email)) {
      Alert.alert("이메일 형식에 맞지 않습니다");
    } else {
      return AjaxMember.findPwAuthNm(data)
        .then((responseJson) => {
          if (responseJson.message === "success") {
            setEmailCheck(true);
            Alert.alert("메일을 확인해주세요")
          } else if (responseJson.message === "fail") {
            Alert.alert("일치하는 정보가 없습니다.")
          }
          console.log("num__" + responseJson.authNum);
          setAuthNum(responseJson.authNum);
        })

    }
  }

  const checkAuthNum = () => {
    if (authNumCheck === '') {
      Alert.alert("메일을 통해 인증번호를 받아주세요")
    } else if (authNumCheck === null) {
      Alert.alert("입력란을 입력해주세요")
    } else if (authNumCheck == authNum) {
      setAuthCheck(true);
      Alert.alert("인증되었습니다")
    } else {
      Alert.alert("다시 확인해주세요")
    }
  }

  const findPw = (data, navigation) => {
    var re = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (data.email == '' || data.memberId == '') {
      Alert.alert("입력란이 비어있습니다");
    } else if (!re.test(data.email)) {
      Alert.alert("이메일 형식에 맞지 않습니다");
    } else if (!authCheck || !emailCheck) {
      Alert.alert("메일을 통해 인증번호를 받아주세요");
    } else {
      navigation.navigate('Find', { order: 2, memberId: data.memberId })
    }
  }

  return (
    <Block flex>
      <StatusBar hidden />
      <Block style={styles.textView}>
        <Text style={[styles.text, { fontWeight: 'bold' }, { fontSize: 16 }]}>비밀번호 찾기</Text>
        <Text style={styles.text}>가입 당시 입력한 이메일을 통해 인증하세요</Text>
      </Block>
      <Block flex space="between" style={styles.padded}>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block style={styles.input}>
            <Input placeholder="아이디" color={'black'} placeholderTextColor="#ADB5BD"
              onChangeText={(text) => setMemberId(text)} />
          </Block>

          {emailCheck == false ?
            <Block style={[styles.input, styles.email]}>
              <Input placeholder='이메일' style={{ width: width - theme.SIZES.BASE * 9.5 }}
                color={'black'} placeholderTextColor="#ADB5BD"
                onChangeText={(text) => setEmail(text)} />
              <Button style={styles.mailButton} shadowless
                onPress={() => { sendEmail(data) }}>전송</Button>
            </Block>
            :
            <Block style={styles.input}>
              <Input icon="check" iconColor="green" family="antdesign" right
                color={theme.COLORS.BLACK}
                value={data.email} editable={false} />
            </Block>}

          {authCheck == false ?
            <Block style={styles.input, styles.email}>
              <Input
                placeholder="인증번호" style={{ width: width - theme.SIZES.BASE * 9.5 }}
                color={'black'} placeholderTextColor="#ADB5BD"
                onChangeText={(text) => setAuthNumCheck(text)} />
              <Button style={styles.mailButton} shadowless
                onPress={() => { checkAuthNum() }}>확인</Button>
            </Block>
            :
            <Block style={styles.input}>
              <Input icon="check" iconColor="green" family="antdesign" right
                color={theme.COLORS.BLACK}
                value={authNumCheck} editable={false} />
            </Block>}

          <Block middle>
            <Button
              style={styles.button}
              onPress={() => { findPw(data, navigation) }}>
              비밀번호 찾기
                </Button>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F2F0'
  },
  padded: {
    paddingTop: 30,
    paddingHorizontal: theme.SIZES.BASE * 2,
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 6,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginTop: 20,
  },
  text: {
    marginTop: '1.5%',
    fontSize: 15,
  },
  textView: {
    paddingHorizontal: theme.SIZES.BASE * 3.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '3%',
  },
  mailButton: {
    width: '18%',
    marginLeft: '1%',
    borderRadius: 8,
  },
  email: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginBottom: -5,
  }
});

export default withNavigation(FindPwScreen);
