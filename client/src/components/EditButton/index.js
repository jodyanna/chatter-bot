import React from 'react';
import { Button } from './style';
import logo from '../../img/icons/edit.png';


export default function EditButton(props) {
  return (
    <Button onClick={props.handleClick} isActive={props.isActive} >
      <img src={logo} alt="edit"/>
    </Button>
  );
}
