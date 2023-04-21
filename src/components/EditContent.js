import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Consumer } from '../context/ContextApi';
//rsf

//style
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

const StyledInput = styled.input`
    margin: 10px 20px 40px;
    border: 2px solid #e9ecef; 
    border-radius: 10px;
    height: 60px;
    width: 600px;
`;

const StyledTexarea = styled.textarea`
    border: 2px solid #e9ecef;
    border-radius: 10px;
`;

const labelStyle = {
    fontSize: "20px",
    fontWeight: "bold",
};

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

function EditContent(props) {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [imgFile, setImgFile] = useState('');
    const imgRef = useRef();

    //글 제목 추가
    const titleAdd  = (e) => {
        const Value = e.target.value;
        setTitle(Value);
    }

    //이미지 추가 
    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        //파일을 url로 만들어줌(파일 정보를 주소처럼 사용가능)
        reader.readAsDataURL(file); 
        reader.onloadend = () => {
            setImgFile(reader.result);
        };
    };

    //글 내용 추가
    const detailAdd = (e) => {
        const Value = e.target.value;
        setDetail(Value);
    }


    return (
        <Consumer>
            {contextValue => (
                <StyledDiv>
                    <label htmlFor='title' style={labelStyle}>
                        글 제목
                        <StyledInput 
                        type="text" 
                        name='title' 
                        onChange={titleAdd}
                        placeholder={
                            contextValue.EditFlag === false ?
                            contextValue.Contents[contextValue.Contents.length-1].Title
                            :
                            contextValue.Contents[contextValue.MoveFlag].Title
                        }
                        />
                    </label>
                    <input 
                        id='title'
                        type="file"
                        ref={imgRef} 
                        style={{marginBottom: '50px'}}
                        onChange={saveImgFile}
                    />
                    {/* Img Test */}
                    {imgFile ? 
                    <img src={imgFile} style={{width: '700px', height: '400px', marginBottom: '30px', marginTop: '10px'}}/> 
                    : '이미지 없음'
                    }
                    <StyledTexarea 
                        cols="100" 
                        rows="20" 
                        placeholder={
                            contextValue.EditFlag === false ?
                            contextValue.Contents[contextValue.Contents.length-1].Detail
                            :
                            contextValue.Contents[contextValue.MoveFlag].Detail
                        }
                        onChange={detailAdd}
                    />
                    <StyledInnerDiv>
                        <Link to={'/Complete'}>
                            <button 
                                style={completeBtnStyle}
                                onClick={ 
                                    e => contextValue.editContentFunc(title, detail, imgFile)
                                }
                            >
                                등록
                            </button>
                        </Link>
                        <Link to={'/'}>
                            <button style={cancelBtnStyle}>취소</button>
                        </Link>
                    </StyledInnerDiv>
                </StyledDiv>
            )}
        </Consumer>
            
    );
}

export default EditContent;