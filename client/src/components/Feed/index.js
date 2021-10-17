import React, {useEffect, useState} from 'react';
import PostCard from "../PostCard";
import {Section, StatusText} from "./style";

export default function Feed(props) {
  const [ isFetchingPosts, setIsFetchingPosts ] = useState(true);
  const [ isFetchingUsers, setIsFetchingUsers ] = useState(true);
  const [ posts, setPosts ] = useState([]);
  const [ users, setUsers ] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      // Fetch recent posts
      const response = await fetch("/posts/recent", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({room: {id: props.room.id}})
      }).catch(error => console.error(error));

      if (response.ok) {
        const res = await response.json();

        setPosts(res.body);
        setIsFetchingPosts(false);
      } else {
        return Promise.reject("Could not connect to API.")
      }
    }

    const fetchUsers = async () => {
      const response = await fetch("/users/all", {
        method: 'GET',
      }).catch(error => console.error(error));

      if (response.ok) {
        const res = await response.json();

        // Turn array of users into hashmap
        let users = {};

        for (const user of res.body) {
          users[user.id] = user.name;
        }

        setUsers(users);
        setIsFetchingUsers(false);
      } else {
        return Promise.reject("Could not connect to API.")
      }
    }

    fetchPosts().catch(error => console.error(error));
    fetchUsers().catch(error => console.error(error))
  }, [props.room.id, props.refresh]);

  const renderPostCards = () => {
    // Fetching data...
    if (isFetchingPosts || isFetchingUsers) return "Loading..."

    // No posts found for current room
    if (posts.length < 1) return <StatusText>This room is empty</StatusText>

    // We have posts to display
    return posts.map((post, index) => <PostCard key={index} post={post} users={users} />)
  }

  return (
    <Section>
      {renderPostCards()}
    </Section>
  );
}
