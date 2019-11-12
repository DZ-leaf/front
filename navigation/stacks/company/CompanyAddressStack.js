import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../../components/Header";
import transitionConfig from '../transitionConfig';

import { CompanyAddressList } from '../../../screens/company';

const CompanyAddressStack = createStackNavigator(
    {
        CompanyAddressList: {
            screen: CompanyAddressList,
            navigationOptions: ({ navigation }) => ({
                header: <Header title="회사" navigation={navigation} />
            })
        },
    },  
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);


export default CompanyAddressStack;