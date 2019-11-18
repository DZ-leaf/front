import React, { useState } from 'react';
import { Image, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Block, GalioProvider } from 'galio-framework';

import Screens from './navigation/Screens';
import ScreenAuth from './navigation/ScreenAuth';
import Images from './constants/Images'

import argonTheme from './constants/Theme';

import { AjaxMember } from "./lib/memberUrl";

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './src/modules';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
))

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

  const autoLogin = async () => {
    try {
      let keys = await AsyncStorage.getAllKeys();
      let items = await AsyncStorage.multiGet(keys)

      console.log(items);
  
      console.log(items.length);

      await AsyncStorage.removeItem('Authorization')
  
      if (items.length > 0) {
        const memberId = await AsyncStorage.getItem('memberId')
        const memberPw = await AsyncStorage.getItem('memberPw')
        if (memberId != null && memberPw != null) {
          let data = {
            "memberId": memberId,
            "memberPw": memberPw
          }
          loginAjax(data);
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  const loginAjax = (data) => {
    return AjaxMember.login(data)
      .then((responseJson) => {
        if (responseJson.message == 'success') {
          setMemberName(responseJson.member.memberName);
          setAuth();
        } else if (responseJson.message == 'fail') {
          Alert.alert("로그인에 실패했습니다")
        }
      })
  }

  const setAuth = async () => {
    try {
      const memberAuth = await AsyncStorage.getItem('Authorization')
      setMemberAuth(memberAuth);
    } catch (error) {
      console.error(error)
    }
  }

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={async () => {
          return Promise.all([
            autoLogin(),
            ...cacheImages(assetImages),
          ]); 
        }}
        onError={(error) => console.warn(error)}
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

export default App;