import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Block, theme } from "galio-framework";

import GroupAtHome from './GroupAtHome';
import CompanyAtHome from './CompanyAtHome';

class HomeScreen extends Component {

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