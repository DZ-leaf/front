import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../../components/Header";
import transitionConfig from '../transitionConfig';

import GroupScreen from '../../../screens/group/GroupScreen';

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
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);

export default GroupStack;