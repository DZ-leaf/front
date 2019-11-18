import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, AsyncStorage } from 'react-native';
import { Block, theme } from "galio-framework";

import GroupAtHome from './GroupAtHome';
import CompanyAtHome from './CompanyAtHome';

const HomeScreen = () => {

    return (
        <ScrollView>
            <CompanyAtHome />
            <GroupAtHome />
        </ScrollView>
    );
}

export default HomeScreen;