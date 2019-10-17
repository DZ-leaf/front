import React from "react";
import { StyleSheet, Image, Dimensions, StatusBar, View } from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import { createStackNavigator} from 'react-navigation-stack';

import { Button, Input } from "../components";
import { Images, argonTheme } from "../constants";

import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {

  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block center>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>
        <Block middle>
            <Block width={width * 0.9}>
                <View style={styles.inputs}>
                <Input placeholder="이름" iconContent={<Block />} style={{borderRadius: 0}}/>
                </View>
                <View style={styles.inputs}>
                <Input style={{borderRadius: 0}}
                  right
                  placeholder="아이디"
                  iconContent={
                    <Block>
                      <Icon size={15} name="check" />
                    </Block>
                  } />
                </View>
                <View style={styles.inputs}>
                <Input placeholder="비밀번호" iconContent={<Block />} style={{borderRadius: 0}}/>
                </View>
                <View style={styles.inputs}>
                <Input style={{borderRadius: 0}}
                  right
                  placeholder="비밀번호 확인"
                  iconContent={
                    <Block>
                      <Icon size={15} name="check" />
                    </Block>
                  } />
                  </View>
            </Block>
        </Block>
        
        <Block middle style={{paddingTop: '10%'}}>
            <Block width={width * 0.9}>
              <View style={styles.inputs}>
                  <Block style={{flexDirection: 'row'}}>
                    <Input placeholder="회사" iconContent={<Block />} style={{borderRadius: 0}}/>
                    <Button style={{width:'15%', paddingTop: '-10%'}}>찾기</Button>
                  </Block>
                </View>
                <View style={styles.inputs} width={width * 0.9}>
                <Input placeholder="부서" iconContent={<Block />} style={{borderRadius: 0}}/>
                </View>
            </Block>
        </Block>

        <Block middle style={{paddingTop: '3%'}}>
            <Block width={width * 0.9}>
              <View style={styles.inputs}>
                <Input style={{borderRadius: 0}}
                  right
                  placeholder="이메일"
                  iconContent={
                    <Block>
                      <Icon size={15} name="check" />
                    </Block>
                  } />
                  </View>
                <View style={styles.inputs}>
                <Input style={{borderRadius: 0}}
                  right
                  placeholder="인증 번호"
                  iconContent={
                    <Block>
                      <Icon size={15} name="check" />
                    </Block>
                  } />
                  </View>
            </Block>
        </Block>
        
        <Block middle style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Button
            style={styles.button}
            // color={'#25A731'}
            // onPress={() => navigation.navigate("Home")}
            textStyle={{ color: argonTheme.COLORS.WHITE }}
          >
            회원 가입
          </Button>
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
  button: {
    width: width - theme.SIZES.BASE * 6,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  inputs: {
    marginTop: '-4%',
    borderRadius: 0
  }
});

export default Register;
