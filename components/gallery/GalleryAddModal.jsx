import React from 'react';

import Roll from '../CameraRoll/Roll';

const GalleryAddModal = (props) => {

    return (
        <Roll closeAddModal={props.closeModal} navigation={props.navigation} />
    );
}

export default GalleryAddModal;