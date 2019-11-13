import React, { Component } from 'react';

import BoardRead from '../../../components/board/BoardRead';

class GroupBoardDetail extends Component {
    render() {
        return (
            <BoardRead moveDelete={"GroupBoardList"}/>
        );
    }
}

export default GroupBoardDetail;