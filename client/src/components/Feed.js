import React, {useState, useEffect}  from 'react';
import styled from "styled-components";

import PostCard from "./PostCard";

const Section = styled.section`
  display: flex; display: -webkit-flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;

  background-color: rgb(248, 125, 196);
  
`;


export default function Feed() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, setData ] = useState({posts: []});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9000/posts", {
        method: 'GET',
      }).catch((error) => console.error('Error:', error));

      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(data)
      } else {
        return Promise.reject("Could not connect to API.")
      }
    };
    fetchData().then(res => {
      setData(res);
      console.log(res)
    });
    setIsLoading(false);
  }, []);

  const renderPostCards = isLoading => {
    if (isLoading) return "loading..."
    else return data.posts.map((post, index) => {
      return <PostCard key={index} text={post.post_text} date={post.post_date}/>
    })
  }

  return (
    <Section>
      {renderPostCards(isLoading)}
    </Section>
  );
}

