import React from "react";
import Tab from '../../../components/member/Tabs.jsx';

const FindScreen = ({ navigation }) => {

    return (
        <Tab order={navigation.getParam('order')} navigation={navigation} />
    );
}

export default FindScreen;