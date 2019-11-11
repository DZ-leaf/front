import React from 'react';
import { Image, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Block, GalioProvider } from 'galio-framework';

import Screens from './navigation/Screens';
import ScreenAuth from './navigation/ScreenAuth';
import Images from './constants/Images'
import articles from './constants/articles';

import argonTheme from './constants/Theme';

import { AjaxUser } from "./lib/url/member/userUrl";

// cache app images
const assetImages = [
  Images.LogoOnboarding,
  Images.Logo,
  Images.iOSLogo,
  Images.androidLogo
];

// cache product images
articles.map(article => assetImages.push(article.image));

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

autoLogin = async () => {
  try {
    const memberId = await AsyncStorage.getItem('memberId')
    const memberPw = await AsyncStorage.getItem('memberPw')
    console.log("id : " + memberId)
    console.log("pw : " + memberPw)
    if (memberId != null && memberPw != null) {
      let data = {
        "memberId": memberId,
        "memberPw": memberPw
      }
      return AjaxUser.login(data)
        .then((responseJson) => {
          if (responseJson.message == 'success') {
            // this.props.navigation.navigate("Home");
            console.log("성공")
          } else if (responseJson.message == 'fail') {
            Alert.alert("로그인에 실패했습니다")
          }
        })
    }
  } catch (e) {
    console.error(e)
  }
}

export default class App extends React.Component {

  componentWillMount() {
    autoLogin = async () => {
      try {
        const memberAuth = await AsyncStorage.getItem('memberAuth')
        console.log(memberAuth);
        this.setState({ memberAuth: memberAuth })
        console.log(this.state.memberAuth);
      } catch (e) {
        console.error(e)
      }
    }
  }

  state = {
    isLoadingComplete: false,
    memberAuth: '',
  }

  render() {

    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <GalioProvider theme={argonTheme}>
          <Block flex>
            {this.state.memberAuth == '' ?
              <Screens />
              :
              <ScreenAuth />
            }
          </Block>
        </GalioProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      autoLogin(),
      ...cacheImages(assetImages),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

}
