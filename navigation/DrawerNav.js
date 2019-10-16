import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerNavigatorItems } from "react-navigation-drawer";

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const CustomDrawerComponent = (props) => (
    <SafeAreaView>
        <View style={styles.logo}>
            <Image source={require('../assets/images/c3.png')} />
        </View>
        <ScrollView>
            <DrawerNavigatorItems  {...props} />
        </ScrollView>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    logo: {
        height: '30%',
        justifyContent: 'space-around',
        paddingLeft: '5%',
        paddingTop: '15%',
    },
    // container: {
    //     backgroundColor: '#F0F2F0',
    // }
})

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    Profile: {
        screen: ProfileScreen,
    }
}, {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerComponent,
})

const AppContainter = createAppContainer(AppDrawerNavigator);
export default AppContainter;