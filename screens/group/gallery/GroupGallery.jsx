import React from 'react';
import Gallery from '../../../components/gallery/Gallery';

const GroupGallery = ({navigation}) => {
    return (
       <Gallery navigation={navigation}  moveDetail={'GroupGalleryDetail'}/>
    );
};

export default GroupGallery;