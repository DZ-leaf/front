import React from 'react';

import Roll from '../CameraRoll/Roll.jsx';

const GalleryAddModal = ({closeModal, navigation}) => {
    
    return (
        <Roll closeAddModal={closeModal} navigation={navigation} />
    );
}

export default GalleryAddModal;