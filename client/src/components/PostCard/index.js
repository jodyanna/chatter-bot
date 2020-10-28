import React from 'react';
import { dateFormat, timeFormat } from "../../util";
import { Container, GreyText, PostBody, PostFooter, SmGreyText } from "./style";


export default function PostCard(props) {

  return (
    <Container>
      <GreyText>{props.users[props.post.user_id]}</GreyText>
      <PostBody>
        <div>{props.post.content}</div>
      </PostBody>
      <PostFooter>
        <SmGreyText>@ {timeFormat(props.post.birth_date)} {dateFormat(props.post.birth_date)}</SmGreyText>
      </PostFooter>
    </Container>
  );
}