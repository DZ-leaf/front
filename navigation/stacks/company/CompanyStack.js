import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../../components/Header";
import transitionConfig from '../transitionConfig';

import CompanyScreen from '../../../screens/company/CompanyScreen';

const CompanyStack = createStackNavigator(
    {
        Company: {
            screen: CompanyScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header search options title="회사" navigation={navigation} />
            })
        },
        // CompanyCamera: {
        //     screen: CompanyCamera,
        //     navigationOptions: {
        //         header: null,
        //     }
        // }
    },  
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);


export default CompanyStack;