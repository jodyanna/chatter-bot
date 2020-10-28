import React, { useState, useEffect }  from 'react';
import PostCard from "../PostCard";
import { Section, StatusText } from "./style";


export default function Feed(props) {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, setData ] = useState({posts: []});
  const [ users, setUsers ] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:9000/posts/recent", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({room: {id: props.room.id}})
      }).catch((error) => console.error('Error:', error));
      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(data)
      } else {
        return Promise.reject("Could not connect to API.")
      }
    };
    fetchPosts().then(res => setData(res));

    const fetchUsers = async () => {
      const response = await fetch("http://localhost:9000/users/all", {
        method: 'GET',
      }).catch((error) => console.error('Error:', error));
      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(data)
      } else {
        return Promise.reject("Could not connect to API.")
      }
    };
    fetchUsers().then(res => {
      let temp = {};
      for (const user of res.users) {
        temp[user.id] = user.name;
      }
      return temp
    })
    .then(temp => setUsers(temp))

    setIsLoading(false);
  }, [props.room.id, props.refresh]);

  const renderPostCards = () => {
    if (isLoading) return "loading..."
    else if (data.posts.length < 1 || data.posts.length === undefined) return <StatusText>This room is empty</StatusText>
    else return data.posts.map((post, index) => {
      return <PostCard key={index} post={post} users={users} />
    })
  }

  return (
    <Section>
      {renderPostCards()}
    </Section>
  );
}
