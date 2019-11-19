import React from 'react';

import Roll from '../CameraRoll/Roll.jsx';

const GalleryAddModal = ({closeModal, navigation, moveDetail}) => {
    
    return (
        <Roll closeAddModal={closeModal} navigation={navigation} moveDetail={moveDetail}/>
    );
}

export default GalleryAddModal;