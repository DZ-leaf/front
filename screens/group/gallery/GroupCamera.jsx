import React from 'react';
import { Block } from 'galio-framework';
import Camera from '../../../components/Camera';

const GroupCamera = (props) => {
    return (
        <Block flex>
            {/* <StatusBar  hidden/> */}
            {/* <Text>Gallery 추가 (카메라, 갤러리 접근)</Text> */}
            <Camera navigation={props.navigation} />
        </Block>
    );
}

export default GroupCamera;