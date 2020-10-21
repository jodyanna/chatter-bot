import styled from "styled-components";
import { fadeInUp, fadeOutUp, fadeInDown, fadeOutDown } from "../Animations";

// props.isUp boolean will make the window 'drop up' instead of down.
export const HiddenWindow = styled.div`
  position: fixed;
  ${props => props.isUp ? 'bottom: 96px;' : 'top: 96px;'};
  z-index: -1;

  display: flex;
  visibility: ${props => props.isActive ? 'visible' : 'hidden'};
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: inherit;
  height: 198px;

  margin: 0;
  padding: 0;
  
  border-radius: 5px 5px 0 0;
  
  background: #1b262c;
  
  transform: translateY(0);
  animation: ${props => {
    if (props.isUp) return props.isActive ?  fadeInUp : fadeOutUp
    else return props.isActive ?  fadeInDown : fadeOutDown
  }} 200ms ease-in;
  transition: visibility 200ms ease-in;
`;