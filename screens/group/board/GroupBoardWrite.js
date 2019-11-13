import React, { Component } from 'react';

import BoardWrite from '../../../components/board/BoardWrite'

class GroupBoardWrite extends Component {
    render() {
        return (
            <BoardWrite move={"GroupBoardList"}/>
        );
    }
}

export default GroupBoardWrite;