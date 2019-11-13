import React, { Component } from 'react';

import BoardRead from '../../../components/board/BoardRead';

class CompanyBoardDetail extends Component {
    
    render() {
        return (
            <BoardRead moveDelete={"CompanyBoardList"}/>
        );
    }
}

export default CompanyBoardDetail;