import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../../components/Header";
import transitionConfig from '../transitionConfig';


import { CompanyBoardList, CompanyBoardDetail, CompanyBoardWrite } from '../../../screens/company';

const CompanyBoardStack = createStackNavigator(
    {
        CompanyBoardList: {
            screen: CompanyBoardList,
            navigationOptions: ({ navigation }) => ({
                header: <Header title="회사" navigation={navigation} />
            })
        },
        CompanyBoardDetail: {
            screen: CompanyBoardDetail,
            navigationOptions: ({ navigation }) => ({
                header: <Header back={true} title="회사" navigation={navigation} />
            })
        },
        CompanyBoardWrite: {
            screen: CompanyBoardWrite,
            navigationOptions: {
                header: null,
                gesturesEnabled: false,
            },
        },
    },  
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);


export default CompanyBoardStack;