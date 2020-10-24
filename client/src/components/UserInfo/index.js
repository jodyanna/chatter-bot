import React, { useState, useEffect } from "react";
import {Container, Info, Stats, Text} from "./style";

export default function UserInfo(props) {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ numOfPosts, setNumOfPosts ] = useState(0);
  const [ numOfRooms, setNumOfRooms ] = useState(0);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const response = await fetch("http://localhost:9000/users/posts", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: {id: props.user.id}})
      }).catch((error) => console.error('Error:', error));

      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(data)
      }
      else return Promise.reject("Could not connect to API.")
    };
    fetchUserPosts().then(res => setNumOfPosts(res.user.length));

    const fetchUserRooms = async () => {
      const response = await fetch("http://localhost:9000/users/rooms", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: {id: props.user.id}})
      }).catch((error) => console.error('Error:', error));

      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(data)
      }
      else return Promise.reject("Could not connect to API.")
    };
    fetchUserRooms().then(res => setNumOfRooms(res.user.length));


    setIsLoading(false);
  }, []);

  const renderUserStats = () => {
    if (isLoading) return "Loading..."
    else return (
      <Stats>
        <Text>Posts: {numOfPosts}</Text>
        <Text>Rooms: {numOfRooms}</Text>
      </Stats>
    )
  }

  return (
    <Container>
      <Info>
        <Text>Name: {props.user.name}</Text>
        <Text>Joined: {props.user.birth_date}</Text>
        {renderUserStats()}
      </Info>
    </Container>
  )
}