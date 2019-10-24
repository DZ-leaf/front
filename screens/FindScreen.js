import React, { Component } from 'react';
import Tab from '../components/Tabs';

class FindScreen extends Component {
    render() {
        const { navigation } = this.props;

        return (
            <Tab order={navigation.getParam('order')} navigation={navigation}
            />
        );
    }
}

export default FindScreen;