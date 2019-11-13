import React, { Component } from 'react';

import BoardList from '../../../components/board/BoardList';

class GroupBoardScreen extends Component {
    render() {
        return (
            <BoardList moveWrite={"GroupBoardWrite"} moveDetail={"GroupBoardDetail"}/>
        );
    }
}

export default GroupBoardScreen;