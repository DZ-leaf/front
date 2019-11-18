import React from 'react';
import { Block } from 'galio-framework';

import BoardCard from '../../components/board/BoardCard.jsx';
import GalleryCard from '../../components/gallery/GalleryCard.jsx';
import CalendarCard from '../../components/calendar/CalendarCard.jsx';
import { ScrollView } from 'react-native-gesture-handler';

const CompanyScreen = () => {

    return (
        <ScrollView>
            <Block flex>
                <BoardCard move={'CompanyBoardList'}/>
                <GalleryCard />
                <CalendarCard />
            </Block>
        </ScrollView>
    );
}

export default CompanyScreen;