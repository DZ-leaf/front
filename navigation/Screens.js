import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

// member
import LoginScreen from "../screens/member/login/LoginScreen";
import RegisterScreen from "../screens/member/register/RegisterScreen";
import FindScreen from '../screens/member/find/FindScreen';

// drawer
import Menu from "./Menu";
import DrawerItem from "../components/DrawerItem";
import CompanyStack from './stacks/CompanyStack';
import {
  ProfileStack, HomeStack, GroupStack, ClubStack, CalendarStack
} from './Stacks.js';

import { HomeBottomStack } from './HomeBottomStack.js';
import { createStackNavigator } from "react-navigation-stack";

const MemberStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null
    },
  },
  Find: {
    screen: FindScreen,
    navigationOptions: {
      header: null
    },
  },
})

const DrawerStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      screen: HomeBottomStack,
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
  Menu,
);

const AppStack = createStackNavigator({
  Member: {
    screen: MemberStack,
    navigationOptions: {
      header: null
    },
  },
  Drawer: {
    screen: DrawerStack,
    navigationOptions: {
      header: null
    },
  },
})

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
