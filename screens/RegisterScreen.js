import React from "react";
import { StyleSheet, Image, Dimensions, StatusBar, View } from "react-native";
import { Block, theme, Button, Input } from "galio-framework";
import { Images, argonTheme } from "../constants";

import Icon from 'react-native-vector-icons/MaterialIcons';

// import { AjaxSign } from "lib/url/user";
import { AjaxUser } from "../lib/url/user/userUrl";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {

  state = {
    user_id: '',
    user_pw: '',
    user_nm: '',
    company_nm: '',
    department_nm: '',
    email: '',
  }

  handleSubmit = () => {
    console.log(this.state);
    this.registerAjax(this.state);
    this.props.navigation.navigate("Login");
  }

  registerAjax = (data) => {
    console.log("zz" + data)
    return AjaxUser.register(data)
    // .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block center style={{ paddingTop: '8%' }}>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>
        <Block middle>
          <Block width={width * 0.9}>
            <View style={styles.inputs}>
              <Input placeholder="이름" iconContent={<Block />}
                style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK}
                onChangeText={(text) => { this.setState({ user_nm: text }) }} />
            </View>
            <View style={styles.inputs}>
              <Input style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK}
                onChangeText={(text) => { this.setState({ user_id: text }) }}
                right
                placeholder="아이디"
                iconContent={
                  <Block>
                    <Icon size={15} name="check" />
                  </Block>
                } />
            </View>
            <View style={styles.inputs}>
              <Input placeholder="비밀번호" iconContent={<Block />}
                style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK}
                onChangeText={(text) => { this.setState({ user_pw: text }) }} />
            </View>
            <View style={styles.inputs}>
              <Input style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK}
                right
                placeholder="비밀번호 확인"
                iconContent={
                  <Block>
                    <Icon size={15} name="check" />
                  </Block>
                } />
            </View>
          </Block>

          <Block width={width * 0.9}>
            <View style={styles.inputs, styles.inputButton}>
              <Input placeholder="회사" iconContent={<Block />}
                style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK}
                onChangeText={(text) => { this.setState({ company_nm: text }) }} />
              <Button style={styles.button, { width: '10%' }}>찾기</Button>
            </View>
            <View style={styles.inputs} width={width * 0.9}>
              <Input placeholder="부서" iconContent={<Block />}
                style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK}
                onChangeText={(text) => { this.setState({ department_nm: text }) }} />
            </View>
          </Block>

          <Block width={width * 0.9}>
            <View style={styles.inputs, styles.inputButton}>
              <Input placeholder="이메일" iconContent={<Block />}
                style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK}
                onChangeText={(text) => { this.setState({ email: text }) }} />
              <Button style={styles.button, { width: '10%' }}>전송</Button>
            </View>
            <View style={styles.inputs, styles.inputButton}>
              <Input placeholder="인증 번호" iconContent={<Block />}
                style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK} />
              <Button style={styles.button, { width: '10%' }}>확인</Button>
            </View>
          </Block>

          <Block style={{ paddingTop: '5%' }}>

            <Button
              style={styles.button}
              onPress={() => this.handleSubmit()}>
              회원 가입
          </Button>
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
  logo: {
    paddingTop: '10%'
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
  inputs: {
    marginTop: '-4%',
    borderRadius: 0,
  },
  inputButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 1.43
  },
});

export default Register;
