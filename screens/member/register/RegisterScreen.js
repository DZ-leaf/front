import React from 'react';
import { StyleSheet, Image, Dimensions, StatusBar, View, Modal, Alert, ScrollView, Text } from "react-native";
import { Block, theme, Button, Input } from "galio-framework";
import Images from "../../../constants/Images";

const { width } = Dimensions.get("screen");

import CompanyFindModal from './CompanyFindModal';
import {AjaxMember} from "../../../lib/url/memberUrl";

class Register extends React.Component {

  state = {
    data: {
      memberId: '',
      memberPw: '',
      memberNm: '',
      companyNm: '',
      departmentNm: '',
      email: '',
      position: 'ㅋ',
      profile: '안녕하세요',
    },
    userPwCheck: '',
    modalVisible: false,
    idCheck: false,
    emailCheck: false,
    authNum: '',
    authNumCheck: '',
    authCheck: false,
    companyList: [],
  }


  handleSubmit = () => {
    const nameRe = RegExp(/^[가-힣]+$/);
    const pwRe = RegExp(/^[a-zA-Z0-9]{4,12}$/);
    if (this.state.data.memberNm === '' || this.state.data.memberPw === '' || this.state.data.companyNm === ''
      || this.state.data.departmentNm === '' || this.state.userPwCheck === '') {
      Alert.alert('입력란이 비어있습니다');
    } else if (!nameRe.test(this.state.data.memberNm)) {
      Alert.alert('이름을 다시 입력해주세요');
    } else if (this.state.data.idCheck === false) {
      Alert.alert('아이디 중복확인을 해주세요');
    } else if (!pwRe.test(this.state.data.memberPw)) {
      Alert.alert('비밀번호를 다시 입력해주세요');
    } else if (this.state.data.memberPw !== this.state.userPwCheck) {
      Alert.alert('비밀번호가 서로 맞지 않습니다');
    } else {
      this.register(this.state.data);
    }
  }

  register = (data) => {
    return AjaxMember.register(data)
      .then((responseJson) => {
        console.log("회원가입 : " + responseJson.message);
        if (responseJson.message === 'success') {
          this.props.navigation.navigate("Login");
        } else if (responseJson.message === 'fail') {
          Alert.alert("회원가입에 실패하였습니다");
        }
      })
  }

  idCheck = (userId) => {
    if (userId === '') {
      Alert.alert("입력란이 비어있습니다");
    } else {
      return AjaxMember.idCheck(userId)
        .then((responseJson) => {
          console.log("아이디 확인 : " + responseJson.message);
          if (responseJson.message === 'success') {
            this.setState({ idCheck: true });
            Alert.alert('사용 가능한 아이디 입니다');
          } if (responseJson.message === 'fail') {
            Alert.alert('중복되는 아이디 입니다');
          }
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
    return AjaxMember.findCompany(data)
      .then((responseJson) => {
        this.setState({ companyList: responseJson.data })
      })
  }

  selectCompany = (data) => {
    this.setState({ data: { ...this.state.data, companyNm: data } })
  }

  sendEmail = (data) => {
    var re = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (data == '') {
      Alert.alert("입력란이 비어있습니다");
    } else if (!re.test(data)) {
      Alert.alert("이메일 형식에 맞지 않습니다");
    } else {
      return AjaxMember.sendEmail(data)
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
    }
  }

  authNumCheck = () => {
    console.log("authNum" + this.state.authNum);
    if (this.state.authNumCheck === '') {
      Alert.alert("메일을 통해 인증번호를 받아주세요")
    } else if (this.state.authNumCheck === null) {
      Alert.alert("입력란을 입력해주세요")
    } else if (this.state.authNumCheck == this.state.authNum) {
      this.setState({ authCheck: true });
      Alert.alert("인증되었습니다")
    } else {
      Alert.alert("다시 확인해주세요")
    }
  }

  render() {

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <ScrollView>
          <Block center style={{ paddingTop: '8%' }}>
            <Image source={Images.LogoOnboarding} style={styles.logo} />
          </Block>
          <Block middle>
            <Block width={width * 0.9}>
              <View style={styles.inputs}>
                <Input placeholder="이름" iconContent={<Block />}
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK} placeholderTextColor="#ADB5BD"
                  onChangeText={(text) => { this.setState({ data: { ...this.state.data, memberNm: text } }) }} />
              </View>
              {this.state.idCheck == false ?
                <View style={styles.inputs, styles.inputButton}>
                  <Input placeholder="아이디" iconContent={<Block />}
                    style={{ borderRadius: 0 }} color={theme.COLORS.BLACK} placeholderTextColor="#ADB5BD"
                    onChangeText={(text) => { this.setState({ data: { ...this.state.data, memberId: text } }) }} />
                  <Button style={styles.button, { width: '10%' }} shadowless
                    onPress={() => this.idCheck(this.state.data.memberId)}>확인</Button>
                </View>
                :
                <View style={styles.inputs}>
                  <Text>{'\u00A0'}</Text>
                  <Input right icon="check" iconColor="green" family="antdesign"
                    style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                    value={this.state.data.memberId} editable={false} />
                </View>
              }
              <View style={styles.inputs}>
                <Input placeholder="비밀번호 : 4~12자의 영문 대소문자와 숫자" iconContent={<Block />}
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  secureTextEntry={true} placeholderTextColor="#ADB5BD"
                  onChangeText={(text) => { this.setState({ data: { ...this.state.data, memberPw: text } }) }} />
              </View>
              <View style={styles.inputs}>
                <Input style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  onChangeText={(text) => { this.setState({ userPwCheck: text }) }}
                  secureTextEntry={true} placeholderTextColor="#ADB5BD"
                  placeholder="비밀번호 확인"
                  right
                  icon={this.state.userPwCheck ?
                    (this.state.data.memberPw === this.state.userPwCheck ? 'check' : 'exclamation') : ''}
                  family="antdesign"
                  iconColor={this.state.userPwCheck ?
                    (this.state.data.memberPw === this.state.userPwCheck ? 'green' : 'red') : ''}
                />
              </View>
            </Block>

            <Block width={width * 0.9}>
              <View style={styles.inputs, styles.inputButton}>
                <Input placeholder="회사" iconContent={<Block />}
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK} placeholderTextColor="#ADB5BD"
                  editable={false} value={this.state.data.companyNm} />
                <Button style={styles.button, { width: '10%' }} shadowless
                  onPress={() => this.setModalVisible(!this.state.modalVisible)}>찾기</Button>
              </View>

              <Modal middle visible={this.state.modalVisible} transparent={false}>
                <CompanyFindModal closeModal={this.closeModal} width={width * 0.8}
                  findCompany={this.findCompany} selectCompany={this.selectCompany}
                  companyList={this.state.companyList}
                />
              </Modal>

              <View style={styles.inputs} width={width * 0.9}>
                <Input placeholder="부서" iconContent={<Block />} placeholderTextColor="#ADB5BD"
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  onChangeText={(text) => { this.setState({ data: { ...this.state.data, departmentNm: text } }) }} />
              </View>
            </Block>

            <Block width={width * 0.9}>
              {this.state.emailCheck == false ?
                <View style={styles.inputs, styles.inputButton}>
                  <Input placeholder="이메일" iconContent={<Block />} placeholderTextColor="#ADB5BD"
                    style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                    onChangeText={(text) => { this.setState({ data: { ...this.state.data, email: text } }) }} />
                  <Button style={styles.button, { width: '10%' }} shadowless
                    onPress={() => this.sendEmail(this.state.data.email)}>전송</Button>
                </View>
                :
                <View style={styles.inputs}>
                  <Text>{'\u00A0'}</Text>
                  <Input icon="check" iconColor="green" family="antdesign" right
                    style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                    value={this.state.data.email} editable={false} />
                </View>
              }
              {this.state.authCheck == false ?
                <View style={styles.inputs, styles.inputButton}>
                  <Input placeholder="인증 번호" iconContent={<Block />} placeholderTextColor="#ADB5BD"
                    style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                    onChangeText={(text) => { this.setState({ authNumCheck: text }) }} />
                  <Button style={styles.button, { width: '10%' }} shadowless
                    onPress={() => this.authNumCheck()}>확인</Button>
                </View>
                :
                <View style={styles.inputs}>
                  <Input icon="check" iconColor="green" family="antdesign" right
                    style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                    value={this.state.authNumCheck} editable={false} />
                </View>
              }
            </Block>

            <Block style={{ paddingTop: '5%', flexDirection: 'row' }}>
              <Button
                style={styles.button}
                onPress={() => this.handleSubmit()}>
                회원 가입
          </Button>
              <Text>
                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
              </Text>
              <Button style={styles.button}
                onPress={() => this.props.navigation.navigate("Login")}>돌아가기</Button>
            </Block>
          </Block>
        </ScrollView>
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
    width: width - theme.SIZES.BASE * 16,
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
