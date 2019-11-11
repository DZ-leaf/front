import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import DrawerStack from './drawer/DrawerNav';

const AppStack = createStackNavigator({
  Drawer: {
    screen: DrawerStack,
    navigationOptions: {
      header: null
    },
  },
})

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
