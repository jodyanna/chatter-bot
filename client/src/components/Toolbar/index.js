import React, { useState } from 'react';
import { ButtonContainer, Container } from './style';

import IconButton from '../IconButton';
import PostForm from '../PostForm';

import editIcon from '../../img/icons/edit.png';
import closedDoorIcon from '../../img/icons/door-closed.png';
import settingsIcon from '../../img/icons/settings.png';
import userIcon from '../../img/icons/user.png';
import { HiddenWindow } from "../HiddenWindow";
import RoomForm from "../RoomForm";
import UserSettings from "../UserSettings";


export default function Toolbar(props) {
  const [ isActiveUser, setIsActiveUser ] = useState(false);
  const [ isActiveEdit, setIsActiveEdit ] = useState(false);
  const [ isActiveRoom, setIsActiveRoom ] = useState(false);
  const [ isActiveSettings, setIsActiveSettings ] = useState(false);

  const handleClickUser = () => {
    initAllState();
    setIsActiveUser(!isActiveUser);
  }

  const handleClickEdit = () => {
    initAllState();
    setIsActiveEdit(!isActiveEdit);
  }

  const handleClickRoom = () => {
    initAllState();
    setIsActiveRoom(!isActiveRoom);
  }

  const handleClickSettings = () => {
    initAllState();
    setIsActiveSettings(!isActiveSettings);
  }

  const initAllState = () => {
    setIsActiveUser(false);
    setIsActiveEdit(false);
    setIsActiveRoom(false);
    setIsActiveSettings(false);
  }

  return (
    <Container>
      <ButtonContainer>
        <IconButton icon={userIcon}
                    handleClick={handleClickUser}
                    isActive={isActiveUser}
        />
        <IconButton icon={editIcon}
                    handleClick={handleClickEdit}
                    isActive={isActiveEdit}
        />
        <IconButton icon={closedDoorIcon}
                    handleClick={handleClickRoom}
                    isActive={isActiveRoom}
        />
        <IconButton icon={settingsIcon}
                    handleClick={handleClickSettings}
                    isActive={isActiveSettings}
        />
      </ButtonContainer>

      <HiddenWindow isActive={isActiveUser} isUp={true} spacing={"96px"}>
        <UserSettings user={props.user}
                      setUser={props.setUser}
                      isSignedIn={props.isSignedIn}
                      setSignInStatus={props.setSignInStatus}
                      isActive={isActiveUser}
        />
      </HiddenWindow>

      <HiddenWindow isActive={isActiveEdit} isUp={true} spacing={"96px"}>
        <PostForm room={props.room}
                  user={props.user}
                  refreshFeed={props.refreshFeed}
        />
      </HiddenWindow>

      <HiddenWindow isActive={isActiveRoom} isUp={true} spacing={"96px"}>
        <RoomForm refreshRooms={props.refreshRooms} />
      </HiddenWindow>

      <HiddenWindow isActive={isActiveSettings} isUp={true} spacing={"96px"}>

      </HiddenWindow>

    </Container>
  );
}