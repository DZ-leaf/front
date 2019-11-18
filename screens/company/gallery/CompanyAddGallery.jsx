import React from 'react';
import { Block } from 'galio-framework';

import Roll from '../../../components/CameraRoll/Roll';

const CompanyAddGallery = (props) => {

    return (
        <Block flex>
            <Roll closeAddModal={props.closeModal} navigation={props.navigation} />
        </Block>
    );
}

export default CompanyAddGallery;