import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../../components/Header";
import transitionConfig from '../transitionConfig';

import { CompanyCalendar } from '../../../screens/company';

const CompanyStack = createStackNavigator(
    {
        CompanyCalendar: {
            screen: CompanyCalendar,
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


export default CompanyStack;