import React, { useState } from 'react';
import { Container, Button } from "./style";
import TextForm from "../TextForm";


export default function EditPost() {
  const [ isActive, setIsActive ] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <Container>
      <Button onClick={handleClick} >
        {isActive ? "Hide" : "Show"}
      </Button>
      <TextForm isActive={isActive} />
    </Container>
  );
}
