import React, { useState } from 'react';
import styled from "styled-components";

import Toolbar from "./components/Toolbar";
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
  const [ currentRoom, setCurrentRoom ] = useState({name: "no_name", room_id: "1"});

  const handleRoomChange = room => setCurrentRoom(room)

  return (
    <MainPage>
      <div>{currentRoom.name}</div>
      <Feed room={currentRoom} />
      <Toolbar room={currentRoom} handleClick={handleRoomChange} />
    </MainPage>
  );
}

export default App;
