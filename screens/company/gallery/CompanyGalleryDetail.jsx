import React from 'react';
import { StyleSheet, View } from 'react-native';

import GalleryDetail from '../../../components/gallery/GalleryDetail.jsx';

const CompanyGalleryDetail = (props) => {

    return (
        <GalleryDetail navigation={props.navigation} />
    );
}

export default CompanyGalleryDetail;