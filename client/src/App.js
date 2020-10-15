import React, { useState } from 'react';
import styled from "styled-components";

import Listen from './components/Listen';
import Chatter from "./components/Chatter";


const MainPage = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  margin: 0;
  padding: 0;
  
  @media only screen and (max-width: 480px) {
      width: 100vw;
  }
`;


function App() {
  return (
    <MainPage>
      <Chatter />
      <hr/>
      <Listen />
    </MainPage>
  );
}

export default App;
