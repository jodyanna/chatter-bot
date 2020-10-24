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
`;


function App() {
  const [ currentUser, setCurrentUser ] = useState({name: "anonymous", id: "2"});
  const [ currentRoom, setCurrentRoom ] = useState({name: "home", id: "1"});
  // Variable to refresh feed after post form is sent, doesn't matter if true/false
  const [ feedRefresh, setFeedRefresh ] = useState(true);


  const handleUserChange = user => setCurrentUser(user)
  const handleRoomChange = room => setCurrentRoom(room)
  const handleFeedRefresh = () => setFeedRefresh(!feedRefresh)

  return (
    <MainPage>
      <Header
        room={currentRoom.name}
        handleClick={handleRoomChange}
      />
      <Feed user={currentUser}
            room={currentRoom}
            refresh={feedRefresh}
      />
      <Toolbar user={currentUser}
               room={currentRoom}
               setUser={handleUserChange}
               refreshFeed={handleFeedRefresh}
      />
    </MainPage>
  );
}

export default App;
