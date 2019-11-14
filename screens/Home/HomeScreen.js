import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Block, theme } from "galio-framework";

import GroupAtHome from './GroupAtHome';
import CompanyAtHome from './CompanyAtHome';

class HomeScreen extends Component {

    componentDidMount() {
        autoLogin = async () => {
            try {
                AsyncStorage.getAllKeys((err, keys) => {
                    AsyncStorage.multiGet(keys, (error, stores) => {
                        console.log(stores.length)
                        stores.map((result, i, store) => {
                            console.log("Home")
                            console.log({ [store[i][0]]: store[i][1] });
                            // return true;
                        });
                    });
                });
            } catch (e) {
                console.error(e)
            }
        }
    }

    render() {
        return (
            <ScrollView>
                <CompanyAtHome />
                <GroupAtHome />
            </ScrollView>
        );
    }
}

export default HomeScreen;