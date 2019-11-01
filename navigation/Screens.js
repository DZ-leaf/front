import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// stacks
import { MemberStack } from './stacks';
import DrawerStack from './drawer/DrawerNav';

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
