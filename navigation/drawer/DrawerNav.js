import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";

import Menu from "./Menu";
import DrawerItem from "../../components/DrawerItem";

import { CompanyStack, HomeStack, GroupStack, CalendarStack } from '../stacks'
import HomeBottomStack from '../nav/HomeBottomNav';
import CompanyBottomStack from '../nav/CompanyBottomNav';
import GroupBottomStack from '../nav/GroupBottomNav'

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
      screen: CompanyBottomStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="회사" />
        )
      })
    },
    Group: {
      screen: GroupStack,
      screen: GroupBottomStack,
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
