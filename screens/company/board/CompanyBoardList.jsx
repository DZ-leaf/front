import React from 'react';
import BoardList from '../../../components/board/BoardList.jsx';

const CompanyBoardScreen = () => {
    return (
        <BoardList moveWrite={"CompanyBoardWrite"} moveDetail={"CompanyBoardDetail"} />
    );
}

export default CompanyBoardScreen;