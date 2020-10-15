import React, { useState } from 'react';
import styled from "styled-components";

import TextForm from "./TextForm";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;

  display: flex;
  display: -webkit-flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100px;

  background-color: rgb(73, 209, 255);
`;

const Button = styled.button`
  width: 95%;
  height: 50px;
  
  margin: 1em 0;
  padding: 0;
`;


export default function EditPost() {
  const [ isActive, setIsActive ] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <Container>
      <Button onClick={handleClick} >
        {isActive ? "Hide" : "Show"}
      </Button>
      <TextForm isActive={isActive} />
    </Container>
  );
}

