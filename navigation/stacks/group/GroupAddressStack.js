import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../../components/Header";
import transitionConfig from '../transitionConfig';

import { GroupAddressList } from '../../../screens/group';

const GroupAddressStack = createStackNavigator(
    {
        GroupAddressList: {
            screen: GroupAddressList,
            navigationOptions: ({ navigation }) => ({
                header: <Header title="그룹" navigation={navigation} />
            })
        },
    },  
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);


export default GroupAddressStack;