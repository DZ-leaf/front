import React from 'react';
import { StyleSheet, Image, Dimensions, StatusBar, View, Modal, Alert, ScrollView, Text } from "react-native";
import { Block, theme, Button, Input } from "galio-framework";
import { Images } from "../constants";

// import Icon from 'react-native-vector-icons/MaterialIcons';

import CompanyFindModal from './CompanyFindModal';

import { AjaxUser } from "../lib/url/member/userUrl";

const { width } = Dimensions.get("screen");

class Register extends React.Component {

  state = {
    data: {
      userId: '',
      userPw: '',
      userNm: '',
      companyNm: '',
      departmentNm: '',
      email: '',
      // position: ' ',
      profile: '안녕하세요',
    },
    userPwCheck: '',
    modalVisible: false,
    idCheck: false,
    emailCheck: false,
    authNum: '',
    authNumCheck: '',
    companyList: [],
  }


  handleSubmit = () => {
    const nameRe = RegExp(/^[가-힣]+$/);
    const pwRe = RegExp(/^[a-zA-Z0-9]{4,12}$/);
    if (this.state.data.userNm === '' || this.state.data.userPw === ''
      || this.state.data.companyNm === '' || this.state.data.departmentNm === '' || this.state.userPwCheck === '') {
      Alert.alert('입력란이 비어있습니다');
    } else if(!nameRe.test(this.state.data.userNm)) {
      Alert.alert('이름을 다시 입력해주세요');
    } else if (this.state.data.idCheck === false) {
      Alert.alert('아이디 중복확인을 해주세요');
    } else if(!pwRe.test(this.state.data.userPw)){
      Alert.alert('비밀번호를 다시 입력해주세요');
    }else if (this.state.data.userPw !== this.state.userPwCheck) {
      Alert.alert('비밀번호가 서로 맞지 않습니다');
    } else {
      this.register(this.state.data);
      this.props.navigation.navigate("Login");
    }
  }

  register = (data) => {
    return AjaxUser.register(data)
      .catch((error) => {
        console.error(error);
      });
  }

  idCheck = (userId) => {
    if (userId === '') {
      Alert.alert("입력란이 비어있습니다");
    } else {
      return AjaxUser.idCheck(userId)
        .then((responseJson) => {
          console.log(responseJson.message);
          if (responseJson.message === 'success') {
            this.setState({ idCheck: true });
            Alert.alert('사용 가능한 아이디 입니다');
          } if (responseJson.message === 'fail') {
            Alert.alert('중복되는 아이디 입니다');
          }
        })
        .catch((error) => {
          console.error(error);
        })
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  closeModal = (e) => {
    if (this.state.modalVisible) {
      this.setState({
        modalVisible: false
      })
    }
  }

  findCompany = (data) => {
    return AjaxUser.findCompany(data)
      .then((responseJson) => {
        console.log(responseJson.data)
        this.setState({ companyList: responseJson.data })
      })
      .catch((error) => {
        console.error(error);
      })
  }

  selectCompany = (data) => {
    this.setState({ data: { ...this.state.data, companyNm: data } })
  }

  sendEmail = (data) => {
    var re = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (data == '') {
      Alert.alert("입력란이 비어있습니다");
    } else if(!re.test(data)){
      Alert.alert("이메일 형식에 맞지 않습니다");
    } else {
      return AjaxUser.sendEmail(data)
        .then((responseJson) => {
          console.log(responseJson.message);
          if (responseJson.message === "success") {
            this.setState({ emailCheck: true });
            Alert.alert("메일을 확인해주세요")
          } else if (responseJson.message === "fail") {
            Alert.alert("다시 입력해주세요")
          }
          console.log(responseJson.authNum);
          this.setState({ authNum: responseJson.authNum })
        })
        .catch((error) => {
          console.error(error);
        })
    }
  }

  authNumCheck = () => {
    console.log("authNum" + this.state.authNum);
    console.log("check" + this.state.authNumCheck);
    if (this.state.authNumCheck === '') {
      Alert.alert("메일을 통해 인증번호를 받아주세요")
    } else if (this.state.authNumCheck === null) {
      Alert.alert("입력란을 입력해주세요")
    } else if (this.state.authNumCheck == this.state.authNum) {
      Alert.alert("인증되었습니다")
    } else {
      Alert.alert("다시 확인해주세요")
    }
  }

  render() {

    return (
      <ScrollView>
        <Block flex style={styles.container}>
          <StatusBar hidden />
          <Block center style={{ paddingTop: '8%' }}>
            <Image source={Images.LogoOnboarding} style={styles.logo} />
          </Block>
          <Block middle>
            <Block width={width * 0.9}>
              <View style={styles.inputs}>
                <Input placeholder="이름" iconContent={<Block />}
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  onChangeText={(text) => { this.setState({ data: { ...this.state.data, userNm: text } }) }} />
              </View>
              <View style={styles.inputs, styles.inputButton}>
                <Input placeholder="아이디" iconContent={<Block />}
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  onChangeText={(text) => { this.setState({ data: { ...this.state.data, userId: text } }) }} />
                <Button style={styles.button, { width: '10%' }} shadowless
                  onPress={() => this.idCheck(this.state.data.userId)}>확인</Button>
              </View>
              <View style={styles.inputs}>
                <Input placeholder="비밀번호 : 4~12자의 영문 대소문자와 숫자" iconContent={<Block />}
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  secureTextEntry={true}
                  onChangeText={(text) => { this.setState({ data: { ...this.state.data, userPw: text } }) }} />
              </View>
              <View style={styles.inputs}>
                <Input style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  onChangeText={(text) => { this.setState({ userPwCheck: text }) }}
                  secureTextEntry={true}
                  placeholder="비밀번호 확인"
                  right
                  icon={this.state.userPwCheck ?
                    (this.state.data.userPw === this.state.userPwCheck ? 'check' : 'exclamation') : ''}
                  family="antdesign"
                  iconColor={this.state.userPwCheck ?
                    (this.state.data.userPw === this.state.userPwCheck ? 'green' : 'red') : ''}
                />
              </View>
            </Block>

            <Block width={width * 0.9}>
              <View style={styles.inputs, styles.inputButton}>
                <Input placeholder="회사" iconContent={<Block />}
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  editable={false} value={this.state.data.companyNm} />
                <Button style={styles.button, { width: '10%' }} shadowless
                  onPress={() => this.setModalVisible(!this.state.modalVisible)}>찾기</Button>
              </View>
              <Modal visible={this.state.modalVisible} transparent={false}>
                <CompanyFindModal closeModal={this.closeModal} width={width * 0.8}
                  findCompany={this.findCompany} selectCompany={this.selectCompany}
                  companyList={this.state.companyList}
                />
              </Modal>

              <View style={styles.inputs} width={width * 0.9}>
                <Input placeholder="부서" iconContent={<Block />}
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  onChangeText={(text) => { this.setState({ data: { ...this.state.data, departmentNm: text } }) }} />
              </View>
            </Block>

            <Block width={width * 0.9}>
              <View style={styles.inputs, styles.inputButton}>
                <Input placeholder="이메일" iconContent={<Block />}
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  onChangeText={(text) => { this.setState({ data: { ...this.state.data, email: text } }) }} />
                <Button style={styles.button, { width: '10%' }} shadowless
                  onPress={() => this.sendEmail(this.state.data.email)}>전송</Button>
              </View>
              <View style={styles.inputs, styles.inputButton}>
                <Input placeholder="인증 번호" iconContent={<Block />}
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  onChangeText={(text) => { this.setState({ authNumCheck: text }) }} />
                <Button style={styles.button, { width: '10%' }} shadowless
                  onPress={() => this.authNumCheck()}>확인</Button>
              </View>
            </Block>

            <Block style={{ paddingTop: '5%', flexDirection: 'row' }}>
              <Button
                style={styles.button}
                onPress={() => this.handleSubmit()}>
                회원 가입
          </Button>
          <Text>
          {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
          {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
          </Text>
          <Button
                style={styles.button}
                onPress={() => this.props.navigation.navigate("Login")}>
                돌아가기
          </Button>
            </Block>
          </Block>
        </Block>
      </ScrollView>
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
    width: width - theme.SIZES.BASE * 20,
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
