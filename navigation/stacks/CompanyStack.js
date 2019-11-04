import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../components/Header";
import transitionConfig from './transitionConfig';

import CompanyScreen from '../../screens/company/CompanyScreen';
import {
    CompanyBoardList, CompanyBoardDetail,
    CompanyGallery, CompanyBoardWrite
} from '../../screens/company';

const CompanyStack = createStackNavigator(
    {
        Company: {
            screen: CompanyScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header search options title="회사" navigation={navigation} />
            })
        },
        CompanyBoard: {
            screen: CompanyBoardList,
            navigationOptions: ({ navigation }) => ({
                header: <Header back={true} title="회사" navigation={navigation} />
            })
        },
        CompanyBoardDetail: {
            screen: CompanyBoardDetail,
            navigationOptions: ({ navigation }) => ({
                header: <Header back={true} title="회사" navigation={navigation} />
            })
        },
        CompanyGallery: {
            screen: CompanyGallery,
            navigationOptions: ({ navigation }) => ({
                header: <Header back={true} title="회사" navigation={navigation} />
            })
        },
        CompanyBoardWrite: {
            screen: CompanyBoardWrite,
            navigationOptions: ({ navigation }) => ({
                header: <Header back={true} title="글쓰기" navigation={navigation} />
            })
        },
    },
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);

export default CompanyStack;