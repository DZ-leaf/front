import React, { useState } from "react";
import { Image, StyleSheet, StatusBar, Dimensions, View, Alert, AsyncStorage } from "react-native";
import { Block, Button, Text, theme, Input, Checkbox } from "galio-framework";
import Images from "../../../constants/Images";

const { width } = Dimensions.get("screen");

import Icon from 'react-native-vector-icons/MaterialIcons';

import { AjaxMember } from "../../../lib/memberUrl";

const LoginScreen = ({ navigation }) => {

  const [memberId, setMemberId] = useState('');
  const [memberPw, setMemberPw] = useState('');
  const [memberName, setMemberName] = useState('');
  const [checked, setChecked] = useState(true);

  const data = {
    "memberId": memberId,
    "memberPw": memberPw,
  }

  const handleSubmit = () => {
    if (memberId == '') {
      Alert.alert("입력란에 아이디를 입력해주세요")
    } else if (memberPw == '') {
      Alert.alert("입력란에 비밀번호를 입력해주세요")
    } else {
      login(data);
    }
  }

  const login = (data) => {
    return AjaxMember.login(data)
      .then((responseJson) => {
        if (responseJson.message == 'success') {
          console.log(responseJson.member.memberName)
          setMemberName(responseJson.member.memberName);
          setData();
          navigation.navigate("Home");
        } else if (responseJson.message == 'fail') {
          Alert.alert("로그인에 실패했습니다")
        }
      })
  }

  const setData = async () => {
    await AsyncStorage.removeItem('Authorization')
    try {
      if (checked) {
        await AsyncStorage.setItem("memberId", memberId);
        await AsyncStorage.setItem("memberPw", memberPw);
      } else if (!checked) {
        await AsyncStorage.clear();
      } 
    } catch (e) {
      console.error(e)
    }
  }

  const check = () => {
    if (checked) {
      setChecked(false)
    } else if (!checked) {
      setChecked(true)
    }
  }

  return (
    <Block flex style={styles.container}>
      <StatusBar hidden />
      <Block center style={{ paddingTop: '8%' }}>
        <Image source={Images.LogoOnboarding} />
      </Block>
      <Block flex space="between" style={styles.padded}>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            placeholder="ID"
            iconContent={<Icon size={20} style={{ marginRight: 10 }} name="person" />}
            color={'#000000'} placeholderTextColor="#ADB5BD"
            onChangeText={(text) => setMemberId(text)} />
          <Input
            placeholder="Password" password
            iconContent={<Icon size={20} style={{ marginRight: 10 }} name="lock" />}
            color={'#000000'} placeholderTextColor="#ADB5BD"
            onChangeText={(text) => setMemberPw(text)} />
          <View style={styles.textAuto}>
            <Checkbox color="primary" labelStyle={{ color: '#707070' }} label="자동 로그인"
              onChange={check} />
          </View>
          <Button
            style={styles.button}
            onPress={() => handleSubmit()}>
            로그인
            </Button>
          <View style={styles.textView}>
            <Text style={styles.text}
              onPress={() => navigation.navigate("Find", { order: 1 })}>
              아이디 비밀번호 찾기 {'\u00A0'}{'\u00A0'}{'\u00A0'}
            </Text>
            <Text style={styles.text}>
              | {'\u00A0'}{'\u00A0'}{'\u00A0'}
            </Text>
            <Text style={styles.text}
              onPress={() => navigation.navigate("Register")}>
              회원가입
                </Text>
          </View>
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
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 6,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  title: {
    marginTop: '-5%'
  },
  subTitle: {
    marginTop: 20
  },
  text: {
    color: '#707070',
    marginTop: '1.5%'
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '3%'
  },
  textAuto: {
    flexDirection: 'row',
    paddingTop: '1%',
    paddingBottom: '3%',
  }
});

export default LoginScreen;