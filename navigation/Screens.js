import React from "react";
import { Easing, Animated } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// screens
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/member/login/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterScreen from "../screens/member/register/RegisterScreen";
import ChatListScreen from '../screens/ChatListScreen';
import AlarmScreen from '../screens/AlarmScreen';
import SettingScreen from '../screens/SettingScreen';
import FindScreen from '../screens/member/find/FindScreen';
import GroupScreen from '../screens/GroupScreen';
import CompanyScreen from '../screens/CompanyScreen';
import ClubScreen from '../screens/ClubScreen';
import CalendarScreen from '../screens/CalendarScreen';

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
    screen: ChatListScreen,
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

const ClubStack = createStackNavigator(
  {
    Setting: {
      screen: ClubScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="동아리" navigation={navigation} />
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

const CalendarStack = createStackNavigator(
  {
    Setting: {
      screen: CalendarScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="일정" navigation={navigation} />
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
      tabBarIcon: ({tintColor}) => (
        <Icon name="home" size={25} color={tintColor}/>
      )
    })
  },
  Chat: {
    screen: ChatStack,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="chat" size={25} color={tintColor} />
      )
    })
  },
  Alarm: {
    screen: AlarmStack,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="bell" size={25} color={tintColor}/>
      )
    })
  },
  Setting: {
    screen: SettingStack,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="settings" size={25} color={tintColor}/>
      )
    })
  },
}, {
  tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: '#25A731', // active icon color
      inactiveTintColor: '#0B5713',  // inactive icon color
      // style: {
      //     backgroundColor: '#0B5713' // TabBar background
      // }
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
      },
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
    Calendar: {
      screen: CalendarStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="일정" />
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
    Club: {
      screen: ClubStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="동아리" />
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

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
