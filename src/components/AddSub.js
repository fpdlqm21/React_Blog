import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Content from './Content';

const StyledAddImg = styled.img`
    float: right;
    width: 30px;
    heigth: 30px;
    margin: 20px 5px 20px 5px;  
`;

const StyledMinusImg = styled(StyledAddImg)`
    width: 33px;
    heigth: 33px;
    margin-top: 19px;
`;

function AddSub(props){
    return(
        <div style={{paddingRight: '10px'}}>
            <Link to='/Content'><StyledAddImg src={require('../images/AddBtn.png')} alt=""/></Link>
            {/* <a href='#'><StyledMinusImg src={require('../images/MinusBtn.png')} alt=""/></a> */}
        </div>
    );
}

export default AddSub;