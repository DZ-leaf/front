import React from 'react';
import Gallery from '../../../components/gallery/Gallery';

const CompanyGallery = (props) => {
    return (
       <Gallery navigation={props.navigation}  moveDetail={"CompanyGalleryDetail"}/>
    );
};

export default CompanyGallery;