import React, {Component} from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import ContextApi from "./context/ContextApi";

/**font */
import './App.css';

/**Components */
import Header from "./components/Header";
import AddSub from "./components/AddSub";
import Search from "./components/Search";
import Content from "./components/Content";
import Post from "./components/Post";
import Home from "./components/Home";
import CompleteContent from "./components/CompleteContent";
import EditContent from "./components/EditContent";
import SearchedContent from "./components/SearchedContent";

/**Styled */
const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
    font-family: 'GeekbleMalang2';
  }
`;
const StyledApp = styled.div`
  margin: 0 auto;
`;


class App extends Component {
  render(){
    return (
        <Router>
          <StyledApp>
            <GlobalStyle/> 
            <Header/>
            <AddSub/>
              <ContextApi>
                <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/Search" element={<Search/>}/>
                  <Route exact path="/Content" element={<Content/>}/>
                  <Route exact path="/Post" element={<Post/>}/>  
                  <Route exact path="/Complete" element={<CompleteContent/>}/>
                  <Route exact path="/Edit" element={<EditContent/>}/>
                  <Route exact path="/Searched" element={<SearchedContent/>}/>
                </Routes>
              </ContextApi>
          </StyledApp>
        </Router>
    );
  }
}

export default App;
