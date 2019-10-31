import React from "react";
import { Easing, Animated } from "react-native";
import { createStackNavigator } from 'react-navigation-stack';

// screens
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import ChatListScreen from '../screens/chat/ChatListScreen';
import AlarmScreen from '../screens/alarm/AlarmScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import GroupScreen from '../screens/group/GroupScreen';
import CompanyScreen from '../screens/company/CompanyScreen';
import ClubScreen from '../screens/club/ClubScreen';
import CalendarScreen from '../screens/calendar/CalendarScreen';
import { CompanyBoardList, CompanyBoardDetail } from '../screens/company';

// header for screens
import Header from "../components/Header";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
    transitionSpec: {
        duration: 400,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
    },
    screenInterpolator: sceneProps => {

        const { layout, position, scene } = sceneProps;
        const thisSceneIndex = scene.index;
        const width = layout.initWidth;

        const scale = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
            outputRange: [4, 1, 1]
        });

        const opacity = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
            outputRange: [0, 1, 1]
        });

        const translateX = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [width, 0]
        });

        const scaleWithOpacity = { opacity };
        const screenName = "Search";

        if (
            screenName === transitionProps.scene.route.routeName ||
            (prevTransitionProps &&
                screenName === prevTransitionProps.scene.route.routeName)
        ) {
            return scaleWithOpacity;
        }
        return { transform: [{ translateX }] };
    }
});

const ChatStack = createStackNavigator({
    Chat: {
        screen: ChatListScreen,
        navigationOptions: ({ navigation }) => ({
            header: <Header title="채팅" navigation={navigation} />
        })
    }
}, {
    cardStyle: {
        backgroundColor: "#F8F9FE"
    },
    transitionConfig
});

const ProfileStack = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: ({ navigation }) => ({
                header: (
                    <Header white transparent title="프로필" iconColor={'#FFF'} navigation={navigation} />
                ),
                headerTransparent: true
            })
        }
    },
    {
        cardStyle: { backgroundColor: "#FFFFFF" },
        transitionConfig
    }
);

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header search options title="홈" navigation={navigation} />
            })
        },
    },
    {
        cardStyle: {
            backgroundColor: "#F8F9FE"
        },
        transitionConfig
    }
);

const AlarmStack = createStackNavigator(
    {
        Alarm: {
            screen: AlarmScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header search options title="알림" navigation={navigation} />
            })
        },
    },
    {
        cardStyle: {
            backgroundColor: "#F8F9FE"
        },
        transitionConfig
    }
);

const SettingStack = createStackNavigator(
    {
        Setting: {
            screen: SettingScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header search options title="설정" navigation={navigation} />
            })
        },
    },
    {
        cardStyle: {
            backgroundColor: "#F8F9FE"
        },
        transitionConfig
    }
);

const GroupStack = createStackNavigator(
    {
        Setting: {
            screen: GroupScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header search options title="그룹" navigation={navigation} />
            })
        },
    },
    {
        cardStyle: {
            backgroundColor: "#F8F9FE"
        },
        transitionConfig
    }
);

const ClubStack = createStackNavigator(
    {
        Setting: {
            screen: ClubScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header search options title="동아리" navigation={navigation} />
            })
        },
    },
    {
        cardStyle: {
            backgroundColor: "#F8F9FE"
        },
        transitionConfig
    }
);

const CalendarStack = createStackNavigator(
    {
        Setting: {
            screen: CalendarScreen,
            navigationOptions: ({ navigation }) => ({
                header: <Header search options title="일정" navigation={navigation} />
            })
        },
    },
    {
        cardStyle: {
            backgroundColor: "#F8F9FE"
        },
        transitionConfig
    }
);

// const CompanyStack = createStackNavigator(
//     {
//         Company: {
//             screen: CompanyScreen,
//             navigationOptions: ({ navigation }) => ({
//                 header: <Header search options title="회사" navigation={navigation} />
//             })
//         },
//         CompanyBoard: {
//             screen: CompanyBoardList,
//             navigationOptions: ({ navigation }) => ({
//                 header: <Header back={true} title="회사" navigation={navigation} />
//             })
//         },
//         CompanyBoardDetail: {
//             screen: CompanyBoardDetail,
//             navigationOptions: ({ navigation }) => ({
//                 header: <Header back={true} title="회사" navigation={navigation} />
//             })
//         },
//     },
//     {
//         cardStyle: {
//             backgroundColor: "#F8F9FE"
//         },
//         transitionConfig
//     }
// );

export {
    ProfileStack,
    HomeStack,
    GroupStack,
    // CompanyStack,
    ClubStack,
    CalendarStack,
    ChatStack,
    SettingStack,
    AlarmStack,
}