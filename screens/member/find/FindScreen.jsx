import React from "react";
import Tab from '../../../components/Tabs';

const FindScreen = ({ navigation }) => {

    return (
        <Tab order={navigation.getParam('order')} navigation={navigation} />
    );
}

export default FindScreen;