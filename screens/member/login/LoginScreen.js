import React from "react";
import { Image, StyleSheet, StatusBar, Dimensions, View, Alert } from "react-native";
import { Block, Button, Text, theme, Input, Checkbox } from "galio-framework";
import Images from "../../../constants/Images";

const { width } = Dimensions.get("screen");

import Icon from 'react-native-vector-icons/MaterialIcons';

import { AjaxUser } from "../../../lib/url/member/userUrl";

class LoginScreen extends React.Component {

  state = {
    memberId: '',
    memberPw: '',
  }

  handleSubmit = () => {
    this.props.navigation.navigate("Home");
    // this.loginAjax(this.state);
  }

  loginAjax = (data) => {
    return AjaxUser.login(data)
    .then((responseJson) => {
      // console.log(responseJson);
      if(responseJson.message == 'success') {
        this.props.navigation.navigate("Home");
      } else if (responseJson.message == 'fail') {
        Alert.alert("로그인에 실패했습니다")
      }
    })
  }

  render() {
    const { navigation } = this.props;

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
              onChangeText={(text) => { this.setState({ memberId: text }) }} />
            <Input
              placeholder="Password" password
              iconContent={<Icon size={20} style={{ marginRight: 10 }} name="lock" />}
              color={'#000000'} placeholderTextColor="#ADB5BD"
              onChangeText={(text) => { this.setState({ memberPw: text }) }} />
            <View style={styles.textAuto}>
              <Checkbox color="primary" labelStyle={{ color: '#707070' }} label="자동 로그인" />
            </View>
            <Button
              style={styles.button}
              onPress={() => this.handleSubmit()}>
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
