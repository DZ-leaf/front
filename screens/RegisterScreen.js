import React from 'react';
import { StyleSheet, Image, Dimensions, StatusBar, View, Modal, Alert } from "react-native";
import { Block, theme, Button, Input } from "galio-framework";
import { Images, argonTheme } from "../constants";

// import Icon from 'react-native-vector-icons/MaterialIcons';

import CompanyFindModal from './CompanyFindModal';

import { AjaxUser } from "../lib/url/user/userUrl";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {

  state = {
    userId: '',
    userPw: '',
    userNm: '',
    companyNm: '',
    departmentNm: '',
    email: '',
    // position: ' ',
    profile: '안녕하세요',
    userPwCheck: '',
    modalVisible: false,
  }

  handleSubmit = () => {
    this.registerAjax(this.state);
    this.props.navigation.navigate("Login");
  }

  registerAjax = (data) => {
    return AjaxUser.register(data)
      .catch((error) => {
        console.error(error);
      });
  }

  idCheck = (userId) => {
    console.log(userId);
    return AjaxUser.idCheck(userId)
      .then((responseJson) => {
        console.log(responseJson.message);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  closeModal = (e) => {
    if(this.state.modalVisible) {
      this.setState({
        modalVisible: false
      })
    }
  }

  findCompany = (data) => {
    // console.log("aaa" + data)
    return AjaxUser.findCompany(data)
      .then((responseJson) => {
        console.log(responseJson.message);
      })
      .catch((error) => {
        console.error(error);
      })
    }

  render() {
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
                onChangeText={(text) => { this.setState({ userNm: text }) }} />
            </View>
            <View style={styles.inputs, styles.inputButton}>
              <Input placeholder="아이디" iconContent={<Block />}
                style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK}
                onChangeText={(text) => { this.setState({ userId: text }) }} />
              <Button style={styles.button, { width: '10%' }} shadowless
                onPress={() => this.idCheck(this.state.userId)}>확인</Button>
            </View>
            <View style={styles.inputs}>
              <Input placeholder="비밀번호" iconContent={<Block />}
                style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK}
                secureTextEntry={true}
                onChangeText={(text) => { this.setState({ userPw: text }) }} />
            </View>
            <View style={styles.inputs}>
              <Input style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK}
                onChangeText={(text) => { this.setState({ userPwCheck: text }) }}
                secureTextEntry={true}
                placeholder="비밀번호 확인"
                right
                icon={this.state.userPwCheck ?
                  (this.state.userPw === this.state.userPwCheck ? 'check' : 'exclamation') : ''}
                family="antdesign"
                iconColor="green"
              />
            </View>
          </Block>

          <Block width={width * 0.9}>
            <View style={styles.inputs, styles.inputButton}>
              <Input placeholder="회사" iconContent={<Block />}
                style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK}
                onChangeText={(text) => { this.setState({ companyNm: text }) }} />
              <Button style={styles.button, { width: '10%' }} shadowless
                onPress={() => this.setModalVisible(!this.state.modalVisible)}>찾기</Button>
            </View>
            <Modal visible={this.state.modalVisible} transparent={false}>
              <CompanyFindModal closeModal={this.closeModal} width={width * 0.8} 
              findCompany={this.findCompany}
              />
            </Modal>

            <View style={styles.inputs} width={width * 0.9}>
              <Input placeholder="부서" iconContent={<Block />}
                style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK}
                onChangeText={(text) => { this.setState({ departmentNm: text }) }} />
            </View>
          </Block>

          <Block width={width * 0.9}>
            <View style={styles.inputs, styles.inputButton}>
              <Input placeholder="이메일" iconContent={<Block />}
                style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK}
                onChangeText={(text) => { this.setState({ email: text }) }} />
              <Button style={styles.button, { width: '10%' }} shadowless>전송</Button>
            </View>
            <View style={styles.inputs, styles.inputButton}>
              <Input placeholder="인증 번호" iconContent={<Block />}
                style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK} />
              <Button style={styles.button, { width: '10%' }} shadowless>확인</Button>
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
