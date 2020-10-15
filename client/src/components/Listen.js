import React, { useState, useEffect } from 'react';
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

  width: 400px;
  height: 100px;

  background-color: rgb(73, 209, 255);


  @media only screen and (max-width: 480px) {
      width: 100vw;
  }
`;


export default function Listen() {
  const [ isActive, setIsActive ] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <Container>
      <button onClick={handleClick} />
      <TextForm isActive={isActive} />
    </Container>
  );
}

