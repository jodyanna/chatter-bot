import React from 'react';
import styled from "styled-components";

import EditPost from './components/EditPost';
import Feed from "./components/Feed";


const MainPage = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;
  
  @media only screen and (max-width: 480px) {
      width: 100vw;
  }
`;


function App() {
  return (
    <MainPage>
      <Feed />
      <hr/>
      <EditPost />
    </MainPage>
  );
}

export default App;
