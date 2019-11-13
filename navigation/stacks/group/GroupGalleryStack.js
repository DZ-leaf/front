import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../../components/Header";
import transitionConfig from '../transitionConfig';

import GroupGalleryDetail from '../../../screens/group/gallery/GroupGalleryDetail';
import GroupAddGallery from '../../../screens/group/gallery/GroupAddGallery';
import GroupGalleryWrite from '../../../screens/group/gallery/GroupGalleryWrite';

import { GroupGallery } from '../../../screens/group';

const GroupGalleryStack = createStackNavigator(
    {
        GroupGallery: {
            screen: GroupGallery,
            navigationOptions: ({ navigation }) => ({
                header: <Header title="그룹" navigation={navigation} />
            })
        },
        GroupGalleryDetail: {
            screen: GroupGalleryDetail,
            navigationOptions: ({ navigation }) => ({
                header: <Header back={true} title="그룹" navigation={navigation} />
            })
        },
        GroupAddGallery: {
            screen: GroupAddGallery,
            navigationOptions: {
                header: null
            }
            
        },
        GroupGalleryWrite: {
            screen: GroupGalleryWrite,
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


export default GroupGalleryStack;