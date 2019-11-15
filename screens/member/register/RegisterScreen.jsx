import React, { useState } from 'react';
import { StyleSheet, Image, Dimensions, StatusBar, View, Modal, Alert, ScrollView, Text } from "react-native";
import { Block, theme, Button, Input } from "galio-framework";
import Images from "../../../constants/Images";

const { width } = Dimensions.get("screen");

import CompanyFindModal from './CompanyFindModal.jsx';
import { AjaxMember } from "../../../lib/member/memberUrl";

const Register = ({ navigation }) => {

  const [memberId, setMemberId] = useState('');
  const [memberPw, setMemberPw] = useState('');
  const [memberName, setMemberName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('ㅋ');
  const [profile, setProfile] = useState('안녕하세요');

  const [userPwCheck, setUserPwCheck] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [idCheck, setIdCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [authNum, setAuthNum] = useState('');
  const [authNumCheck, setAuthNumCheck] = useState('');
  const [authCheck, setAuthCheck] = useState(false);
  const [companyList, setCompanyList] = useState([]);

  const data = {
    "memberId": memberId,
    "memberPw": memberPw,
    "memberName": memberName,
    "companyName": companyName,
    "departmentName": departmentName,
    "email": email,
    "position": 'ㅋ',
    "profile": '안녕하세요',
  }

  const showModal = (visible) => {
    setModalVisible(visible);
  }

  const closeModal = (e) => {
    if (modalVisible) {
      setModalVisible(false)
    }
  }

  const handleSubmit = () => {
    const nameRe = RegExp(/^[가-힣]+$/);
    const pwRe = RegExp(/^[a-zA-Z0-9]{4,12}$/);
    if (memberName === '' || memberPw === '' || companyName === ''
      || departmentName === '' || userPwCheck === '') {
      Alert.alert('입력란이 비어있습니다');
    } else if (!nameRe.test(memberName)) {
      Alert.alert('이름을 다시 입력해주세요');
    } else if (idCheck === false) {
      Alert.alert('아이디 중복확인을 해주세요');
    } else if (!pwRe.test(memberPw)) {
      Alert.alert('비밀번호를 다시 입력해주세요');
    } else if (memberPw !== userPwCheck) {
      Alert.alert('비밀번호가 서로 맞지 않습니다');
    } else {
      register(data);
    }
  }

  const register = (data) => {
    return AjaxMember.register(data)
      .then((responseJson) => {
        if (responseJson.message === 'success') {
          navigation.navigate("Login");
        } else if (responseJson.message === 'fail') {
          Alert.alert("회원가입에 실패하였습니다");
        }
      })
  }

  const checkId = (userId) => {
    if (userId === '') {
      Alert.alert("입력란이 비어있습니다");
    } else {
      return AjaxMember.idCheck(userId)
        .then((responseJson) => {
          if (responseJson.message === 'success') {
            setIdCheck(true)
            Alert.alert('사용 가능한 아이디 입니다');
          } if (responseJson.message === 'fail') {
            Alert.alert('중복되는 아이디 입니다');
          }
        })
    }
  }

  const findCompany = (data) => {
    return AjaxMember.findCompany(data)
      .then((responseJson) => {
        setCompanyList(responseJson.data)
      })
  }

  const selectCompany = (data) => {
    setCompanyName(data)
  }

  const sendEmail = (data) => {
    var re = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (data == '') {
      Alert.alert("입력란이 비어있습니다");
    } else if (!re.test(data)) {
      Alert.alert("이메일 형식에 맞지 않습니다");
    } else {
      return AjaxMember.sendEmail(data)
        .then((responseJson) => {
          if (responseJson.message === "success") {
            setEmailCheck(true)
            Alert.alert("메일을 확인해주세요")
          } else if (responseJson.message === "fail") {
            Alert.alert("다시 입력해주세요")
          }
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
                onChangeText={(text) => setMemberName(text)} />
            </View>
            {!idCheck ?
              <View style={styles.inputs, styles.inputButton}>
                <Input placeholder="아이디" iconContent={<Block />}
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK} placeholderTextColor="#ADB5BD"
                  onChangeText={(text) => setMemberId(text)} />
                <Button style={styles.button, { width: '10%' }} shadowless
                  onPress={() => checkId(memberId)}>확인</Button>
              </View>
              :
              <View style={styles.inputs}>
                <Text>{'\u00A0'}</Text>
                <Input right icon="check" iconColor="green" family="antdesign"
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  value={memberId} editable={false} />
              </View>
            }
            <View style={styles.inputs}>
              <Input placeholder="비밀번호 : 4~12자의 영문 대소문자와 숫자" iconContent={<Block />}
                style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                secureTextEntry={true} placeholderTextColor="#ADB5BD"
                onChangeText={(text) => setMemberPw(text)} />
            </View>
            <View style={styles.inputs}>
              <Input style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                onChangeText={(text) => setUserPwCheck(text)}
                secureTextEntry={true} placeholderTextColor="#ADB5BD"
                placeholder="비밀번호 확인"
                right
                icon={userPwCheck ? (memberPw === userPwCheck ? 'check' : 'exclamation') : ''}
                family="antdesign"
                iconColor={userPwCheck ? (memberPw === userPwCheck ? 'green' : 'red') : ''}
              />
            </View>
          </Block>

          <Block width={width * 0.9}>
            <View style={styles.inputs, styles.inputButton}>
              <Input placeholder="회사" iconContent={<Block />}
                style={{ borderRadius: 0 }} color={theme.COLORS.BLACK} placeholderTextColor="#ADB5BD"
                editable={false} value={companyName} />
              <Button style={styles.button, { width: '10%' }} shadowless
                onPress={() => showModal(!modalVisible)}>찾기</Button>
            </View>

            <Modal middle visible={modalVisible} transparent={false}>
              <CompanyFindModal closeModal={closeModal} width={width * 0.8}
                findCompany={findCompany} selectCompany={selectCompany}
                companyList={companyList}
              />
            </Modal>

            <View style={styles.inputs} width={width * 0.9}>
              <Input placeholder="부서" iconContent={<Block />} placeholderTextColor="#ADB5BD"
                style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                onChangeText={(text) => setDepartmentName(text)} />
            </View>
          </Block>

          <Block width={width * 0.9}>
            {!emailCheck ?
              <View style={styles.inputs, styles.inputButton}>
                <Input placeholder="이메일" iconContent={<Block />} placeholderTextColor="#ADB5BD"
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  onChangeText={(text) => setEmail(text)} />
                <Button style={styles.button, { width: '10%' }} shadowless
                  onPress={() => sendEmail(email)}>전송</Button>
              </View>
              :
              <View style={styles.inputs}>
                <Text>{'\u00A0'}</Text>
                <Input icon="check" iconColor="green" family="antdesign" right
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  value={email} editable={false} />
              </View>
            }
            {!authCheck ?
              <View style={styles.inputs, styles.inputButton}>
                <Input placeholder="인증 번호" iconContent={<Block />} placeholderTextColor="#ADB5BD"
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  onChangeText={(text) => setAuthNumCheck(text)} />
                <Button style={styles.button, { width: '10%' }} shadowless
                  onPress={checkAuthNum}>확인</Button>
              </View>
              :
              <View style={styles.inputs}>
                <Input icon="check" iconColor="green" family="antdesign" right
                  style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                  value={authNumCheck} editable={false} />
              </View>
            }
          </Block>

          <Block style={{ paddingTop: '5%', flexDirection: 'row' }}>
            <Button
              style={styles.button}
              onPress={() => handleSubmit()}>
              회원 가입
          </Button>
            <Text>
              {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
              {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            </Text>
            <Button style={styles.button}
              onPress={() => navigation.navigate("Login")}>돌아가기</Button>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
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
