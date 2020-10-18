import React from 'react';
import { Button } from './style';


export default function EditButton(props) {
  return (
    <Button onClick={props.handleClick} isActive={props.isActive} >
      <img src={props.logo} alt=""/>
    </Button>
  );
}
