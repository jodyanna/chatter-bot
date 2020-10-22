import React, { useState } from 'react';
import styled from "styled-components";

import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Feed from "./components/Feed";


const MainPage = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  margin: 0;
  padding: 0;
  
  background: #1b262c;
  
  @media only screen and (max-width: 480px) {
      
  }
`;


function App() {
  const [ currentUser, setCurrentUser ] = useState({name: "anonymous", user_id: "1"});
  const [ currentRoom, setCurrentRoom ] = useState({name: "no_name", room_id: "1"});

  const handleUserChange = user => setCurrentUser(user)
  const handleRoomChange = room => setCurrentRoom(room)

  return (
    <MainPage>
      <Header room={currentRoom.name} handleClick={handleRoomChange} />
      <Feed user={currentUser} room={currentRoom} />
      <Toolbar user={currentUser} room={currentRoom} handleClick={handleUserChange} />
    </MainPage>
  );
}

export default App;
