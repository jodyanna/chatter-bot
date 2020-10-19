import React, { useState } from 'react';
import { ButtonContainer, Container } from './style';

import ToolbarButton from '../ToolbarButton';
import TextForm from '../TextForm';
import RoomNav from "../RoomNav";

import editLogo from '../../img/icons/edit.png';
import closedDoorLogo from '../../img/icons/door-closed.png';
import openDoorLogo from '../../img/icons/open-door.png';


export default function Toolbar() {
  const [ isActiveEdit, setIsActiveEdit ] = useState(false);
  const [ isActiveRoom, setIsActiveRoom ] = useState(false);

  const handleClickEdit = () => {
    setIsActiveEdit(!isActiveEdit);
  }
  const handleClickRoom = () => {
    setIsActiveRoom(!isActiveRoom);
  }

  return (
    <Container>
      <ButtonContainer>
        <ToolbarButton logo={editLogo} handleClick={handleClickEdit} isActive={isActiveEdit} />
        <ToolbarButton logo={closedDoorLogo} handleClick={handleClickRoom} isActive={isActiveRoom} />
      </ButtonContainer>
      <TextForm isActive={isActiveEdit} />
      <RoomNav isActive={isActiveRoom} />
    </Container>
  );
}