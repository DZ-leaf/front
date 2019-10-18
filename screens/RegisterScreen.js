import React from "react";
import { StyleSheet, Image, Dimensions, StatusBar, View } from "react-native";
import { Block, theme, Button, Input } from "galio-framework";
import { Images, argonTheme } from "../constants";

import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {

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
              <Input placeholder="이름" iconContent={<Block />} style={{ borderRadius: 0 }} />
            </View>
            <View style={styles.inputs}>
              <Input style={{ borderRadius: 0 }}
                right
                placeholder="아이디"
                iconContent={
                  <Block>
                    <Icon size={15} name="check" />
                  </Block>
                } />
            </View>
            <View style={styles.inputs}>
              <Input placeholder="비밀번호" iconContent={<Block />} style={{ borderRadius: 0 }} />
            </View>
            <View style={styles.inputs}>
              <Input style={{ borderRadius: 0 }}
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
              <Input placeholder="회사" iconContent={<Block />} style={{ borderRadius: 0 }} />
              <Button style={styles.button, { width: '10%' }}>찾기</Button>
            </View>
            <View style={styles.inputs} width={width * 0.9}>
              <Input placeholder="부서" iconContent={<Block />} style={{ borderRadius: 0 }} />
            </View>
          </Block>

          <Block width={width * 0.9}>
            <View style={styles.inputs, styles.inputButton}>
              <Input placeholder="이메일" iconContent={<Block />} style={{ borderRadius: 0 }} />
              <Button style={styles.button, { width: '10%' }}>전송</Button>
            </View>
            <View style={styles.inputs, styles.inputButton}>
              <Input placeholder="인증 번호" iconContent={<Block />} style={{ borderRadius: 0 }} />
              <Button style={styles.button, { width: '10%' }}>확인</Button>
            </View>
          </Block>

          <Block style={{ paddingTop: '5%' }}>

            <Button
              style={styles.button}
              onPress={() => navigation.navigate("Home")}>
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
