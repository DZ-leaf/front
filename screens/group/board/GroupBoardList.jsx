import React from 'react';
import BoardList from '../../../components/board/BoardList';

const GroupBoardScreen = () => {
    return (
        <BoardList moveWrite={"GroupBoardWrite"} moveDetail={"GroupBoardDetail"} />
    );
}

export default GroupBoardScreen;