import React, { useState } from 'react';
import { ButtonContainer, Container } from './style';

import IconButton from '../IconButton';
import PostForm from '../PostForm';

import editLogo from '../../img/icons/edit.png';
import closedDoorLogo from '../../img/icons/door-closed.png';
import { ToolbarWindow } from "../ToolbarWindow";
import RoomForm from "../RoomForm";


export default function Toolbar(props) {
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
        <IconButton icon={editLogo} handleClick={handleClickEdit} isActive={isActiveEdit} />
        <IconButton icon={closedDoorLogo} handleClick={handleClickRoom} isActive={isActiveRoom} />
      </ButtonContainer>

      <ToolbarWindow isActive={isActiveEdit} isUp={true}>
        <PostForm room={props.room} />
      </ToolbarWindow>

      <ToolbarWindow isActive={isActiveRoom} isUp={true}>
        <RoomForm />
      </ToolbarWindow>

    </Container>
  );
}