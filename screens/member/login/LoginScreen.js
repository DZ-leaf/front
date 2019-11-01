import React from "react";
import { Image, StyleSheet, StatusBar, Dimensions, View } from "react-native";
import { Block, Button, Text, theme, Input, Checkbox } from "galio-framework";
import Images from "../../../constants/Images";

import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get("screen");

import { AjaxUser } from "../../../lib/url/member/userUrl";

class LoginScreen extends React.Component {

  state = {
    userId:'',
    userPw:'',
  }

  handleSubmit = () => {
    this.loginAjax(this.state);
    this.props.navigation.navigate("Home");
  }

  loginAjax = (data) => {
    return AjaxUser.login(data)
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { navigation } = this.props;
    
    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block center style={{paddingTop: '8%'}}>
          <Image source={Images.LogoOnboarding}/>
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Input
              placeholder="ID"
              iconContent={<Icon size={20} style={{ marginRight: 10 }} name="person" />} 
              color={'#000000'}
              onChangeText={(text) => { this.setState({ userId: text }) }}/>
            <Input
              placeholder="Password"
              iconContent={<Icon size={20} style={{ marginRight: 10 }} name="lock" />} 
              color={'#000000'}
              onChangeText={(text) => { this.setState({ userPw: text }) }}/>
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
                onPress={() => navigation.navigate("Find", {order: 1})}>
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
