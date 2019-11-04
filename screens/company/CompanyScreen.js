import React, { Component } from 'react';
import { Block } from 'galio-framework';

import BoardCard from '../../components/BoardCard';
import GalleryCard from '../../components/GalleryCard';
import CalendarCard from '../../components/CalendarCard';
import { ScrollView } from 'react-native-gesture-handler';

class CompanyScreen extends Component {

    render() {
        return (
            <ScrollView>
                <Block flex>
                    <BoardCard />
                    <GalleryCard />
                    <CalendarCard/>
                </Block>
            </ScrollView>
        );
    }
}

export default CompanyScreen;