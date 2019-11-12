import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../../components/Header";
import transitionConfig from '../transitionConfig';

import CompanyGalleryDetail from '../../../screens/company/gallery/CompanyGalleryDetail';
import CompanyAddGallery from '../../../screens/company/gallery/CompanyAddGallery';
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
        CompanyAddGallery: {
            screen: CompanyAddGallery,
            // navigationOptions: ({ navigation }) => ({
            //     header: <Header back={true} title="회사" navigation={navigation} />
            // }),
            mode: 'modal',
            
        },
        CompanyGalleryWrite: {
            screen: CompanyGalleryWrite,
            // mode: 'modal'
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


export default CompanyGalleryStack;