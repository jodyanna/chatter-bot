import styled from "styled-components";
import { fadeIn, fadeOut } from "../Animations";


export const Container = styled.form`
  position: fixed;
  bottom: 9.2vh;
  z-index: -1;

  display: flex;
  visibility: ${props => props.isActive ? 'visible' : 'hidden'};
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: inherit;
  height: fit-content;

  margin: 0;
  padding: 0;
  
  border-radius: 5px 5px 0 0;
  
  background: #1b262c;
  
  transform: translateY(0);
  animation: ${props => props.isActive ? fadeIn : fadeOut} 200ms ease-in;
  transition: visibility 200ms ease-in;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 0.5em 1em;
  padding: 0;
  
  &:hover {
    cursor: pointer;
  }
`;

export const ListItem = styled.li`
  text-align: center;
  
  margin: 0.5em 1em;
  padding: 0;

  font-family: inherit;
  font-size: inherit;
  font-weight: bold;

  color: #3282b8;

  list-style: none;
 
`;