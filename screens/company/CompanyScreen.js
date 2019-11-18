import React, { Component } from 'react';
import { Block } from 'galio-framework';

import BoardCard from '../../components/board/BoardCard.jsx';
import GalleryCard from '../../components/gallery/GalleryCard';
import CalendarCard from '../../components/calendar/CalendarCard.jsx';
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