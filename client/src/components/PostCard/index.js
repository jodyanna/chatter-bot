import React from 'react';
import { Container } from "./style";


export default function PostCard(props) {
  return (
    <Container>
      <span>{props.text}</span>
      <span>{props.date}</span>
    </Container>
  );
}