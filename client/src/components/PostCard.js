import React from 'react';

import styled from 'styled-components';


/**
 Styled components
 */
const Container = styled.div`
  display: flex; display: -webkit-flex;
  flex-direction: column;
  
  width: 90%;
  height: fit-content;
  
  margin: 0;
  padding: 1vw;
  
  background: #00ffa7;
  border: #99ffa7 solid 2px;
  border-radius: 5px;
`;


export default function PostCard(props) {


  return (
    <Container>
      <span>{props.text}</span>
      <span>{props.date}</span>
    </Container>
  );
}