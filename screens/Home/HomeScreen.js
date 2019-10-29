import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Block, theme } from "galio-framework";


import GroupAtHome from './GroupAtHome';
import CompanyAtHome from './CompanyAtHome';
import ClubAtHome from './ClubAtHome';

class HomeScreen extends Component {

    render() {
        return (
            <ScrollView>
                <CompanyAtHome />
                <ClubAtHome />
                <GroupAtHome />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default HomeScreen;