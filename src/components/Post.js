import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 60px;
    height: 60px;
`;

const StyledInput = styled.input`
    width: 700px;
    height: 50px;
    border: 2px solid #e9ecef; 
    border-radius: 10px; 
`;

function Post(props) {
    return (
        <div>
            <h1>Content Title</h1>
            <div>
                <p>글</p><br/>
                <article>그것을 보는 때에 우리의 귀는 생의 찬미를 듣는다 
                    그것은 웅대한 관혁악이며 미묘한 교향이다 뼈 끝에
                    스며들어
                </article>
            </div>
            <img src={require('../images/sampleimg.png')} alt=''/>
            <div>
                <StyledImg src={require('../images/User.png')} alt=''/>
                <StyledInput type="text" placeholder='내용을 입력해주세요'/>
            </div>
        </div>
    );
}

export default Post;