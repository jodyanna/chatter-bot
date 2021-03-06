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


export default function App() {
  const [ isSignedIn, setIsSignedIn ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState({name: "anonymous", id: "2"});
  const [ currentRoom, setCurrentRoom ] = useState({name: "home", id: "1"});
  // Variables to refresh feeds after forms are sent, doesn't matter if true/false
  const [ feedRefresh, setFeedRefresh ] = useState(true);
  const [ roomsRefresh, setRoomsRefresh ] = useState(true);


  const handleSignInStatus = () => setIsSignedIn(!isSignedIn)
  const handleUserChange = user => setCurrentUser(user)
  const handleRoomChange = room => setCurrentRoom(room)
  const handleFeedRefresh = () => setFeedRefresh(!feedRefresh)
  const handleRoomsRefresh = () => setRoomsRefresh(!roomsRefresh)

  return (
    <MainPage>
      <Header room={currentRoom.name}
              handleClick={handleRoomChange}
              refresh={roomsRefresh}
      />
      <Feed user={currentUser}
            room={currentRoom}
            refresh={feedRefresh}
      />
      <Toolbar user={currentUser}
               room={currentRoom}
               isSignedIn={isSignedIn}
               setSignInStatus={handleSignInStatus}
               setUser={handleUserChange}
               refreshFeed={handleFeedRefresh}
               refreshRooms={handleRoomsRefresh}
      />
    </MainPage>
  );
}
