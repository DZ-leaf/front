import React from "react";
import { Easing, Animated } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { TabNavigator } from 'react-navigation';
import { Navigation } from 'react-native-navigation';

import { Block } from "galio-framework";

import Icon from 'react-native-vector-icons/MaterialIcons';

// screens
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ChatScreen from '../screens/ChatScreen';
import AlarmScreen from '../screens/AlarmScreen';
import SettingScreen from '../screens/SettingScreen';
import FindScreen from '../screens/FindScreen';
import FindPwScreen from '../screens/FindPwScreen';
import GroupScreen from '../screens/GroupScreen';
import CompanyScreen from '../screens/CompanyScreen';
// drawer
import Menu from "./Menu";
import DrawerItem from "../components/DrawerItem";

// header for screens
import Header from "../components/Header";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = "Search";

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});

const ChatStack = createStackNavigator({
  Chat: {
    screen: ChatScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="채팅" navigation={navigation} />
    })
  }
}, {
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="프로필" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="홈" navigation={navigation} />
      })
    },
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);

const AlarmStack = createStackNavigator(
  {
    Alarm: {
      screen: AlarmScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="알림" navigation={navigation} />
      })
    },
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);

const SettingStack = createStackNavigator(
  {
    Setting: {
      screen: SettingScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="설정" navigation={navigation} />
      })
    },
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);

const GroupStack = createStackNavigator(
  {
    Setting: {
      screen: GroupScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="그룹" navigation={navigation} />
      })
    },
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);

const CompanyStack = createStackNavigator(
  {
    Setting: {
      screen: CompanyScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="회사" navigation={navigation} />
      })
    },
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);

const BottomStack = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <Icon name="home" size={20} />
      )
    })
  },
  Chat: {
    screen: ChatStack,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <Icon name="chat-bubble-outline" size={20} />
      )
    })
  },
  Alarm: {
    screen: AlarmStack,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <Icon name="alarm" size={20} />
      )
    })
  },
  Setting: {
    screen: SettingStack,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <Icon name="settings" size={20} />
      )
    })
  }
})

const AppStack = createDrawerNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        drawerLabel: () => { }
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    Find: {
      screen: FindScreen,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    Home: {
      screen: HomeStack,
      screen: BottomStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="홈" />
        )
      })
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="프로필" />
        )
      })
    },
    Company: {
      screen: CompanyStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="회사" />
        )
      })
    },
    Group: {
      screen: GroupStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="그룹" />
        )
      })
    },
  },
  Menu
);

export const findTab = () => {
  Navigation.registerComponent('findId', () => FindScreen);
  Navigation.registerComponent('findPw', () => FindPwScreen)
}
// const TabBar = TabNavigator({
//   findID: {
//     screen: FindScreen,
//   }
// })

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
