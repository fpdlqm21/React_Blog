import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button,
} from 'reactstrap';
import styled from 'styled-components';
import { Consumer } from '../context/ContextApi';
import { Link } from 'react-router-dom';

//style
const StyledCard = styled.div`
    padding: 0;
    margin: 50px;
    width: 300px;
    height: 300px;
`;

const StyledCardBody = styled(CardBody)`
    text-align: center;
    padding-top: 3px;
`;

const StyledCardTitle = styled(CardTitle)`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;

const StyledCardText = styled(CardText)`
    font-size: 13px;
`;

const StyledButton = styled(Button)`
    background-color: black;
`;

const Styleddeletebutton = styled.button`
    float: right;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    margin-top: 0;
    padding: 0;
`
const imgStyle = {
    margin: '0',
    width: '20px',
    height: '20px',
};

function CardElement({content}) {
    return (
        <Consumer>
            {contextValue => 
                <StyledCard>
                    <Card>
                        <CardImg 
                            top height="100px"
                            src={
                                contextValue.Contents[content[1]].Img ?
                                contextValue.Contents[content[1]].Img
                                :
                                require('../images/sampleimg.png')
                            } 
                            alt=""
                        />
                        <StyledCardBody>
                            <Styleddeletebutton
                                onClick={e => contextValue.deleteStateFunc(content[1])}
                            >
                                <img src={require('../images/minus.png')} alt="" 
                                    style={imgStyle}
                                />
                            </Styleddeletebutton>
                            <StyledCardTitle>{content[0].Title}</StyledCardTitle>
                            <StyledCardText>{content[0].Detail}</StyledCardText>
                            <Link to={'/Complete'}>
                                <StyledButton
                                    onClick={e => contextValue.moveContentFunc(content[1], true)}
                                >
                                    이동하기
                                </StyledButton>
                            </Link>
                        </StyledCardBody>
                    </Card>
                </StyledCard>
            }
        </Consumer>
    );
}

export default CardElement;