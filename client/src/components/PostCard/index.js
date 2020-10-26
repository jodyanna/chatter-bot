import React from 'react';
import { Container } from "./style";


export default function PostCard(props) {
  return (
    <Container>
      <div>{props.text}</div>
      <div>{props.date}</div>
    </Container>
  );
}