import React, { useState } from 'react';
import { ButtonContainer, Container } from './style';

import EditButton from "../EditButton";
import TextForm from "../TextForm";


export default function Toolbar() {
  const [ isActive, setIsActive ] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <Container>
      <ButtonContainer>
        <EditButton handleClick={handleClick} isActive={isActive} />

      </ButtonContainer>
      <TextForm isActive={isActive} />
    </Container>
  );
}