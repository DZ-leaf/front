import React from 'react';
import { Block } from 'galio-framework';

import Roll from '../../../components/CameraRoll/Roll';

const GroupAddGallery = () => {

    return (
        <Block flex>
            <Roll navigation={this.props.navigation} />
        </Block>
    );
}

export default GroupAddGallery;