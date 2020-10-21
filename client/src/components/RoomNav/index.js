import React, { useState, useEffect } from 'react';
import {Container, List, ListItem} from "./style";


export default function RoomNav(props) {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, setData ] = useState({rooms: []});

  useEffect(() => {
    fetchAllRooms().then(res => setData(res));
    setIsLoading(false);
  }, []);

  const handleClick = room => {
    props.handlePropsClick(room);
    props.handleClick();
  }

  const renderRooms = () => {
    if (isLoading) return "Loading..."
    else return data.rooms.map((room, index) => {
      return <ListItem key={index} onClick={() => handleClick(room)}>{room.name}</ListItem>
    })
  }

  return (
    <Container>
      <List>
        {renderRooms()}
      </List>
    </Container>

  )
}

const fetchAllRooms = async () => {
  const response = await fetch("http://localhost:9000/rooms/all", {
    method: 'GET',
  }).catch((error) => console.error('Error:', error));

  if (response.ok) {
    const data = await response.json();
    return Promise.resolve(data)
  }
  else return Promise.reject("Could not connect to API.")
};