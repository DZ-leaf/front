import React, { useState } from 'react';
import { Image, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Block, GalioProvider } from 'galio-framework';

import Screens from './navigation/Screens';
import ScreenAuth from './navigation/ScreenAuth';
import Images from './constants/Images'

import argonTheme from './constants/Theme';

import { AjaxMember } from "./lib/member/memberUrl";

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/modules';
const store = createStore(rootReducer);

// cache app images
const assetImages = [
  Images.LogoOnboarding,
  Images.Logo,
  Images.iOSLogo,
  Images.androidLogo
];

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const App = () => {

  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [memberAuth, setMemberAuth] = useState('');
  const [memberName, setMemberName] = useState('');

  autoLogin = async () => {
    try {
      let keys = await AsyncStorage.getAllKeys();
      let items = await AsyncStorage.multiGet(keys)

      if (items.length > 0) {
        const memberId = await AsyncStorage.getItem('memberId')
        const memberPw = await AsyncStorage.getItem('memberPw')
        if (memberId != null && memberPw != null) {
          let data = {
            "memberId": memberId,
            "memberPw": memberPw
          }
          this.loginAjax(data);
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  loginAjax = (data) => {
    return AjaxMember.login(data)
      .then((responseJson) => {
        if (responseJson.message == 'success') {
          setMemberName(responseJson.memberName);
          this.setAuth();
        } else if (responseJson.message == 'fail') {
          Alert.alert("로그인에 실패했습니다")
        }
      })
  }

  setAuth = async () => {
    try {
      const memberAuth = await AsyncStorage.getItem('Authorization')
      setMemberAuth(memberAuth);
      await AsyncStorage.setItem("memberName", memberName);
    } catch (error) {
      console.error(error)
    }
  }

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={() => setIsLoadingComplete(true)}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <GalioProvider theme={argonTheme}>
          <Block flex>
            {memberAuth == '' ?
              <Screens />
              :
              <ScreenAuth />
            }
          </Block>
        </GalioProvider>
      </Provider>
    );
  }
}

const _loadResourcesAsync = async () => {
  return Promise.all([
    this.autoLogin(),
    ...cacheImages(assetImages),
  ]);
};

const _handleLoadingError = error => {
  // In this case, you might want to report the error to your error
  // reporting service, for example Sentry
  console.warn(error);
};

export default App;