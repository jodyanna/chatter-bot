import styled, { css } from "styled-components";
import { fadeInUp, fadeOutUp, fadeInDown, fadeOutDown } from "../Animations";

const animationRule = css`
  ${props => {
    if (props.isUp) return props.isActive ?  fadeInUp : fadeOutUp
    else return props.isActive ?  fadeInDown : fadeOutDown
  }} 200ms ease-in;
`;

// props.isUp boolean will make the window 'drop up' instead of down.
export const HiddenWindow = styled.div`
  ${props => props.isUp ? `bottom: ${props.spacing};` : `top: ${props.spacing};`}
  position: fixed;
  z-index: 1;

  display: block;
  visibility: ${props => props.isActive ? 'visible' : 'hidden'};

  align-items: center;
  justify-content: center;

  width: 100%;

  margin: 0;
  padding: 0;
  
  background-color: #1b262c;
  
  transform: translateY(0);
  animation: ${animationRule}
  transition: visibility 200ms ease-in;
`;

