import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../components/Header";
import transitionConfig from './transitionConfig';

import CompanyScreen from '../../screens/company/CompanyScreen';
import CompanyGalleryDetail from '../../screens/company/gallery/CompanyGalleryDetail'
import {
    CompanyBoardList, CompanyBoardDetail,
    CompanyGallery, CompanyBoardWrite,
    CompanyCalendar
} from '../../screens/company';

const CompanyStack = createStackNavigator(
    {
        Company: {
            screen: CompanyScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header search options title="회사" navigation={navigation} />
            })
        },
        CompanyBoardList: {
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
        CompanyGalleryDetail: {
            screen: CompanyGalleryDetail,
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
        CompanyCalendar: {
            screen: CompanyCalendar,
            navigationOptions: ({ navigation }) => ({
                header: <Header back={true} title="회사" navigation={navigation} />
            })
        }
    },
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);

export default CompanyStack;