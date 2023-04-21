import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
`;

const StyledInput = styled.input`
    width: 500px;
    height: 50px;

    margin-right: 3px;
    
    font-size: 25px;
    border: 2px solid black;
    border-radius: 10px;
`;

const StyledBtn = styled.button`
    width: 60px;

    font-size: 20px;
    color: black;
    background-color: white;
    border-radius: 10px;
`;

class Search extends Component {
    render() {
        return (
            <StyledDiv>
                <StyledInput type="text" placeholder='검색어 입력'/>
                <StyledBtn>검색</StyledBtn>
            </StyledDiv>
        );
    }
}

export default Search;