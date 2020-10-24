import React, { useState, useEffect }  from 'react';
import { Section, StatusText } from "./style";
import PostCard from "../PostCard";


export default function Feed(props) {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, setData ] = useState({posts: []});

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData().then(res => setData(res));
    setIsLoading(false);
  }, [props.room.id, props.refresh]);

  const renderPostCards = isLoading => {
    if (isLoading) return "loading..."
    else if (data.posts.length < 1 || data.posts.length === undefined) return <StatusText>This room is empty</StatusText>
    else return data.posts.map((post, index) => {
      return <PostCard key={index} text={post.content} date={post.birth_date} />
    })
  }

  return (
    <Section>
      {renderPostCards(isLoading)}
    </Section>
  );
}
