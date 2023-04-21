import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


const StyledDiv = styled.div`
    width: 1800px;
    margin: 20px auto;
    border-bottom: 2px solid rgb(196,196,196);
`;

const StyledImg = styled.img`
    float: right;
    width: 50px;
    heigth: 50px;
    margin: 10px;
    margin-top: 20px; 
`;

const Title = {
    fontWeight: '800', 
    fontSize: '40px', 
    color: 'black',
    marginLeft: '20px',
    marginTop: '20px',
}

function Header(props){
    return (
        <>
            <div>
                <Link to={'/'} style={{
                        display: "inline-block",
                        textDecoration:"none",
                        width: "100px",
                    }}>
                    <h1 style={Title}>blog</h1>
                </Link>
                <a href='#'><StyledImg src={require('../images/User.png')} alt="" /></a>
                <Link to={"/Search"}><StyledImg src={require('../images/search.png')} alt=""/></Link>
                <StyledDiv/>
            </div>  
        </>
    );
}

export default Header;