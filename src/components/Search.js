import React, { Component } from 'react';
import styled from 'styled-components';
import { Consumer } from '../context/ContextApi';
import {Link} from 'react-router-dom';

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
    constructor(props){
        super(props);
        this.findFunc = this.findFunc.bind(this);
        this.state = {};
    }

    findFunc(e){
        const Value = e.target.value;
        this.setState({
            SearchTitle: Value,
        });
    }

    render() {
        return (
            <Consumer>
                {ContextValue => (
                    <StyledDiv>
                        <StyledInput 
                            type="text" 
                            placeholder='게시물 제목입력'
                            onChange={this.findFunc}
                        />
                        <Link to={'/Searched'}>
                            <StyledBtn
                                onClick={e => ContextValue.searchTitleFunc(this.state)}
                            >
                                검색
                            </StyledBtn>
                        </Link>
                    </StyledDiv>
                )}
            </Consumer>
        );
    }
}

export default Search;