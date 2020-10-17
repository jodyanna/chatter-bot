import React from 'react';
import styled from "styled-components";

import EditPost from './components/EditPost';
import Feed from "./components/Feed";


const MainPage = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 480px;
  height: 100%;

  margin: 0;
  padding: 0;
  
  background: #1b262c;
  
  @media only screen and (max-width: 480px) {
      width: 100vw;
  }
`;


function App() {
  return (
    <MainPage>
      <Feed />
      <EditPost />
    </MainPage>
  );
}

export default App;
