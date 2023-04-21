import React from 'react';
import styled from 'styled-components';
import { Consumer } from '../context/ContextApi';

import CardElement from './CardElement';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 150px;
`;

function Home(props) {
    return (
        <StyledDiv>
            <Consumer>
                {contextValue =>
                  ( 
                    contextValue.Contents.length>0 ?
                    contextValue.Contents.map((element, idx) => (
                        <CardElement content={[element, idx]}
                        />
                    ))
                    :
                    '게시물이 없습니다.'
                  )
                }
            </Consumer>
        </StyledDiv>
    );
}

export default Home;