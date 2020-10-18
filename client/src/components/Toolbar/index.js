import React, { useState } from 'react';
import { ButtonContainer, Container } from './style';

import EditButton from "../EditButton";
import TextForm from "../TextForm";

import editLogo from '../../img/icons/edit.png';


export default function Toolbar() {
  const [ isActive, setIsActive ] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <Container>
      <ButtonContainer>
        <EditButton logo={editLogo} handleClick={handleClick} isActive={isActive} />

      </ButtonContainer>
      <TextForm isActive={isActive} />
    </Container>
  );
}