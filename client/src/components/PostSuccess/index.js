import styled, { keyframes } from "styled-components";


const fadeInOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const PostSuccess = styled.div`
  position: fixed;
  z-index: 2;
  
  display: ${props => props.isSent ? "flex" : "none"};
  
  align-items: center;
  justify-content: center;
  
  font-size: 2em;

  width: inherit;
  height: 240px;
  
  background-color: rgb(73, 209, 255);
  color: #ffffff;
  
  opacity: 0;
  animation: 1.5s ${fadeInOut} ease-out;
`;