import React from 'react';
import { Container } from "./style";
import { dateFormat, timeFormat } from "../../util";



export default function PostCard(props) {

  return (
    <Container>
      <div>{props.users[props.post.user_id]}</div>
      <div>{props.post.content}</div>
      <div>{dateFormat(props.post.birth_date)} {timeFormat(props.post.birth_date)}</div>
    </Container>
  );
}