import React, { useState } from 'react';
import IconButton from '../IconButton';
import PostForm from '../PostForm';
import RoomForm from "../RoomForm";
import UserSettings from "../UserSettings";
import { HiddenWindow } from "../HiddenWindow";
import { ButtonContainer, Container } from './style';
import editIcon from '../../img/icons/edit.png';
import closedDoorIcon from '../../img/icons/door-closed.png';
import userIcon from '../../img/icons/user.png';



export default function Toolbar(props) {
  const [ isActiveUser, setIsActiveUser ] = useState(false);
  const [ isActiveEdit, setIsActiveEdit ] = useState(false);
  const [ isActiveRoom, setIsActiveRoom ] = useState(false);

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

  const initAllState = () => {
    setIsActiveUser(false);
    setIsActiveEdit(false);
    setIsActiveRoom(false);
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
    </Container>
  );
}