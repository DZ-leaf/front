import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";

import Menu from "./Menu";
import DrawerItem from "../../components/DrawerItem";

import { CompanyStack, HomeStack, ProfileStack, GroupStack, ClubStack, CalendarStack } from '../stacks'
import HomeBottomStack from '../nav/HomeBottomNav';

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

export default DrawerStack;
