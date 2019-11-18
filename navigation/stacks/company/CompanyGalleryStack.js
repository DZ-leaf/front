import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../../components/Header";
import transitionConfig from '../transitionConfig';

import CompanyGalleryDetail from '../../../screens/company/gallery/CompanyGalleryDetail';
import CompanyGalleryWrite from '../../../screens/company/gallery/CompanyGalleryWrite';

import { CompanyGallery } from '../../../screens/company';

const CompanyGalleryStack = createStackNavigator(
    {
        CompanyGallery: {
            screen: CompanyGallery,
            navigationOptions: ({ navigation }) => ({
                header: <Header title="회사" navigation={navigation} />
            })
        },
        CompanyGalleryDetail: {
            screen: CompanyGalleryDetail,
            navigationOptions: ({ navigation }) => ({
                header: <Header back={true} title="회사" navigation={navigation} />
            })
        },
        CompanyGalleryWrite: {
            screen: CompanyGalleryWrite,
            navigationOptions: {
                header: null
            }
        },

    },  
    {
        cardStyle: { backgroundColor: "#F8F9FE" },
        transitionConfig
    }
);


export default CompanyGalleryStack;