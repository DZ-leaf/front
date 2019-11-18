import React from 'react';
import { ScrollView } from 'react-native';

import GroupAtHome from './GroupAtHome.jsx';
import CompanyAtHome from './CompanyAtHome.jsx';

const HomeScreen = () => {

    return (
        <ScrollView>
            <CompanyAtHome />
            <GroupAtHome />
        </ScrollView>
    );
}

export default HomeScreen;