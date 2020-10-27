import React from 'react';
import { Container } from "./style";
import { dateFormat, timeFormat } from "../../util";



export default function PostCard(props) {

  return (
    <Container>
      <div>{props.text}</div>
      <div>{dateFormat(props.date)} {timeFormat(props.date)}</div>
    </Container>
  );
}