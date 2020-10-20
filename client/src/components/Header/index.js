import React, { useState } from "react";
import { Container, H2, Row } from "./style";
import arrow from "../../img/icons/expand-arrow.png";

import RoomNav from "../RoomNav";
import IconButton from "../IconButton";
import { ToolbarWindow } from "../ToolbarWindow";


export default function Header(props) {
  const [ isActive, setIsActive ] = useState(false)

  const handleClick = () => setIsActive(!isActive)

  return (
    <Container>
      <Row>
        <IconButton icon={arrow} handleClick={handleClick} isActive={isActive} />
        <H2>{props.room}</H2>
      </Row>
      <ToolbarWindow isActive={isActive} isUp={false}>
        <RoomNav handleClick={props.handleClick} isActive={isActive}/>
      </ToolbarWindow>
    </Container>
  )
}