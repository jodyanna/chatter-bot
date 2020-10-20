import React from "react";
import { Container, H2 } from "./style";


export default function Header(props) {
  return (
    <Container>
      <H2>{props.room}</H2>
    </Container>
  )
}