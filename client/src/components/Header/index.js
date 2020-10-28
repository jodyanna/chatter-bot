import React, { useState } from "react";
import RoomNav from "../RoomNav";
import IconButton from "../IconButton";
import { Container, H2, Row } from "./style";
import { HiddenWindow } from "../HiddenWindow";
import arrow from "../../img/icons/expand-arrow.png";


export default function Header(props) {
  const [ isActive, setIsActive ] = useState(false)

  const handleClick = () => setIsActive(!isActive)

  return (
    <Container>
      <Row>
        <IconButton icon={arrow}
                    handleClick={handleClick}
                    isActive={isActive}
        />
        <H2>{props.room}</H2>
      </Row>
      <HiddenWindow isActive={isActive} isUp={false} spacing={"96px"}>
        <RoomNav handlePropsClick={props.handleClick}
                 handleClick={handleClick}
                 isActive={isActive}
                 refresh={props.refresh}
        />
      </HiddenWindow>
    </Container>
  )
}