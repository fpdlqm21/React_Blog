import React from 'react';
import styled from 'styled-components';
import { Consumer } from '../context/ContextApi';
import {Link} from 'react-router-dom';

//styled
const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 100px;
`;

const StyledInnerDiv = styled.div`
    width: 720px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledInnerDetail = styled(StyledInnerDiv)`
    background-color: white;
    border: 2px solid black;
    border-radius: 10px;
`;

const completeBtnStyle = {
    width:'100px',
    backgroundColor: "black",
    color: "white",
    fontSize: "20px",
    borderRadius: "10px",
    margin: '10px'
};

const cancelBtnStyle = { 
    width:'100px',
    borderRadius: "10px",
    fontSize: '20px',
};


function SearchedContent(props) {
    return (
        <Consumer>
            {contextValue => (
                <StyledDiv>
                    {/* 글 제목 */}
                    <h1>{
                        contextValue.Contents[contextValue.SearchIdx].Title
                    }</h1>
                    {/* 선택한 이미지 */}
                    
                    <img 
                        src={
                            contextValue.Contents[contextValue.SearchIdx].Img
                        } 
                        style={{width: '700px', height: '400px', marginBottom: '30px', marginTop: '10px'}}
                        alt="" 
                    />
                {/* 글 내용 */}
                    <StyledInnerDetail>
                        {
                         contextValue.Contents[contextValue.SearchIdx].Detail
                        }
                    </StyledInnerDetail>
                    <StyledInnerDiv>
                        <Link to={'/'}>
                            <button
                                style={completeBtnStyle}
                                //여기 수정필요 이거 들어가면 자꾸 페이지 멈춤
                                onClick={e => contextValue.moveContentFunc('none', false)}
                            >
                                목록
                            </button>
                        </Link>
                    </StyledInnerDiv>
                </StyledDiv>
            )}
        </Consumer>
    );
}

export default SearchedContent;