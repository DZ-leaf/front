import React, { Component } from 'react';

import BoardWrite from '../../../components/board/BoardWrite'

class CompanyBoardWrite extends Component {
    render() {
        return (
            <BoardWrite move={"CompanyBoardList"}/>
        );
    }
}

export default CompanyBoardWrite;