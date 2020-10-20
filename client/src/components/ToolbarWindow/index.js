import styled from "styled-components";
import { fadeIn, fadeOut } from "../Animations";

export const ToolbarWindow = styled.div`
  position: fixed;
  bottom: 9.2vh;
  z-index: -1;

  display: flex;
  visibility: ${props => props.isActive ? 'visible' : 'hidden'};
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: inherit;
  height: 200px;

  margin: 0;
  padding: 0;
  
  border-radius: 5px 5px 0 0;
  
  background: #1b262c;
  
  transform: translateY(0);
  animation: ${props => props.isActive ? fadeIn : fadeOut} 200ms ease-in;
  transition: visibility 200ms ease-in;
`;