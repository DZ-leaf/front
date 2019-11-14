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

import { AjaxMember } from "./lib/url/memberUrl";

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

export default class App extends React.Component {

  state = {
    isLoadingComplete: false,
    memberAuth: '',
  }

  componentWillMount() {
    autoLogin = async () => {
      try {
        let keys = await AsyncStorage.getAllKeys();
        let items = await AsyncStorage.multiGet(keys)

        AsyncStorage.getAllKeys((err, keys) => {
          AsyncStorage.multiGet(keys, (error, stores) => {
            console.log(stores.length)
            stores.map((result, i, store) => {
              console.log({ [store[i][0]]: store[i][1] });
              // return true;
            });
          });
        });

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
  }

  loginAjax = (data) => {
    return AjaxMember.login(data)
      .then((responseJson) => {
        console.log("name : " + responseJson.info);
        if (responseJson.message == 'success') {
          this.setAuth();
        } else if (responseJson.message == 'fail') {
          Alert.alert("로그인에 실패했습니다")
        }
      })
  }

  setAuth = async () => {
    try {
      const memberAuth = await AsyncStorage.getItem('Authorization')
      this.setState({ memberAuth: memberAuth })
    } catch (error) {
      console.error(error)
    }
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
        <Provider store={store}>
          <GalioProvider theme={argonTheme}>
            <Block flex>
              {this.state.memberAuth == '' ?
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
