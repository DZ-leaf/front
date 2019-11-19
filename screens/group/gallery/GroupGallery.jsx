import React from 'react';
import Gallery from '../../../components/gallery/Gallery';

const GroupGallery = () => {
    return (
       <Gallery navigation={props.navigation}  moveDetail={'GroupGalleryDetail'}/>
    );
};

export default GroupGallery;