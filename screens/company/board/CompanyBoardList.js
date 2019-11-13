import React, { Component } from 'react';
import BoardList from '../../../components/board/BoardList';
class CompanyBoardScreen extends Component {
    render() {
        return (
            <BoardList moveWrite={"CompanyBoardWrite"} moveDetail={"CompanyBoardDetail"}/>
        );
    }
}

export default CompanyBoardScreen;