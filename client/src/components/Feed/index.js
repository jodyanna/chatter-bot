import React, { useState, useEffect }  from 'react';
import { Section } from "./style";
import PostCard from "../PostCard";


export default function Feed() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, setData ] = useState({posts: []});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9000/posts/recent", {
        method: 'GET',
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
  }, []);

  const renderPostCards = isLoading => {
    if (isLoading) return "loading..."
    else return data.posts.map((post, index) => {
      return <PostCard key={index} text={post.content} date={post.date}/>
    })
  }

  return (
    <Section>
      {renderPostCards(isLoading)}
      <div style={{height: "100px"}} /* Blank space offset for ToolbarButton fixed footer */ />
    </Section>
  );
}
