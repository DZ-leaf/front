import React from "react";
import { StyleSheet, StatusBar, Dimensions, Alert, } from "react-native";
import { Block, Button, Text, theme, Input } from "galio-framework";
import { withNavigation } from 'react-navigation';

import { AjaxUser } from "../../../lib/url/member/userUrl";

const { width } = Dimensions.get("screen");

// import Images from "../constants/Images";

class FindPwScreen extends React.Component {
  state = {
    data: {
      memberId: '',
      email: '',
    },
    emailCheck: false,
    authNum: '',
    authNumCheck: '',
    authCheck: false,
  }

  sendEmail = (data) => {
    console.log(data);
    const mail = data.email;
    console.log(mail);

    var re = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (mail == '') {
      Alert.alert("입력란이 비어있습니다");
    } else if (!re.test(mail)) {
      Alert.alert("이메일 형식에 맞지 않습니다");
    } else {
      return AjaxUser.findPwAuthNm(data)
        .then((responseJson) => {
          console.log(responseJson.message);
          if (responseJson.message === "success") {
            this.setState({ emailCheck: true });
            Alert.alert("메일을 확인해주세요")
          } else if (responseJson.message === "fail") {
            Alert.alert("정보 없음")
          }
          console.log("num__" + responseJson.authNum);
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
      this.setState({ authCheck: true })
      Alert.alert("인증되었습니다")
    } else {
      Alert.alert("다시 확인해주세요")
    }
  }

  findPw = (data, navigation) => {
    console.log(data);
    navigation.navigate('Find', { order: 2, memberId: data.memberId })
  }

  render() {
    const { navigation } = this.props;

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
              <Input placeholder="아이디" color={'black'} 
              onChangeText={(text) => { this.setState({ data: { ...this.state.data, memberId: text } }) }} />
            </Block>
            <Block style={[styles.input, styles.email]}>
              <Input placeholder='이메일' style={{ width: width - theme.SIZES.BASE * 9.5 }} color={'black'}
                onChangeText={(text) => { this.setState({ data: { ...this.state.data, email: text } }) }} />
              <Button style={styles.mailButton} shadowless 
              onPress={() => { this.sendEmail(this.state.data) }}>전송</Button>
            </Block>
            <Block style={styles.input, styles.email}>
              <Input placeholder="인증번호" style={{ width: width - theme.SIZES.BASE * 9.5 }} 
              color={'black'} onChangeText={(text) => { this.setState({ authNumCheck: text }) }} />
              <Button style={styles.mailButton} shadowless 
              onPress={() => { this.authNumCheck() }}>확인</Button>
            </Block>
            <Block middle>
              <Button
                style={styles.button}
                onPress={() => { this.state.authCheck ? this.findPw(this.state.data, navigation)
                  : Alert.alert("메일을 통해 인증번호를 받아주세요")}}>
                비밀번호 찾기
                </Button>
            </Block>
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