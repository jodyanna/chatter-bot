import React, {useState, useEffect}  from 'react';
import styled from "styled-components";

import PostCard from "./PostCard";

const Section = styled.section`
  display: flex; display: -webkit-flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 400px;
  height: 100vh;

  margin: 0;
  padding: 0;

  background-color: rgb(248, 125, 196);
  
  @media only screen and (max-width: 480px) {
    width: 100vw;
  }
`;


export default function Chatter() {
  const [state, setState] = useState("loading");
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9000/chatter");
      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(data.post)
      } else {
        return Promise.reject("Could not connect to API.")
      }
    };
    fetchData().then(res => setData(res));
    setState("loaded");
  }, []);

  return (
    <Section>
      <p>{state}</p>
      <PostCard text={data.post_text} date={data.post_date} />
    </Section>
  );
}

