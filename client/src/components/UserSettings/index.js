import React from "react";
import {Container, ProfilePic, Text, TextRow} from "./style";
import userIcon from '../../img/icons/user-96.png';


export default function UserSettings(props) {

  return (
    <Container>
      <ProfilePic>
        <img src={userIcon} alt="" style={{width: '140px', height: '180px'}}/>
      </ProfilePic>
      <Text>
        <TextRow>Name: {props.user.name}</TextRow>
        <TextRow>Rooms: N/A</TextRow>
        <TextRow>Posts: N/A</TextRow>
        <TextRow>Member since: N/A</TextRow>
      </Text>
    </Container>
  )
}