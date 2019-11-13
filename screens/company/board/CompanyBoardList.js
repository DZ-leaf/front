import React, { Component } from 'react';
import BoardList from '../../../components/board/BoardList';
class CompanyBoardScreen extends Component {
    render() {
        return (
            <BoardList move={"CompanyBoardWrite"}/>
        );
    }
}

export default CompanyBoardScreen;