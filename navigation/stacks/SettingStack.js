import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../components/Header";
import transitionConfig from './transitionConfig';

import SettingScreen from '../../screens/setting/SettingScreen.jsx';

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
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);

export default SettingStack;