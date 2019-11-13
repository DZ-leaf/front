import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../../../components/Header";
import transitionConfig from '../transitionConfig';

import { GroupBoardList, GroupBoardDetail, GroupBoardWrite } from '../../../screens/group';

const GroupBoardStack = createStackNavigator(
    {
        GroupBoardList: {
            screen: GroupBoardList,
            navigationOptions: ({ navigation }) => ({
                header: <Header title="그룹" navigation={navigation} />
            })
        },
        GroupBoardDetail: {
            screen: GroupBoardDetail,
            navigationOptions: ({ navigation }) => ({
                header: <Header back={true} title="그룹" navigation={navigation} />
            })
        },
        GroupBoardWrite: {
            screen: GroupBoardWrite,
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


export default GroupBoardStack;