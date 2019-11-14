import React from 'react';
import LoginScreen from '../../screens/member/login/LoginScreen';
import RegisterScreen from '../../screens/member/register/RegisterScreen.jsx';
import FindScreen from '../../screens/member/find/FindScreen.jsx';

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

export default MemberStack;