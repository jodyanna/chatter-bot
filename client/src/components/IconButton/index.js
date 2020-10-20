import React from 'react';
import { Button } from './style';


export default function IconButton(props) {
  return (
    <Button onClick={props.handleClick} isActive={props.isActive} >
      <img src={props.icon} alt=""/>
    </Button>
  );
}
