import styled, {keyframes} from "styled-components";


export const fadeInOut = keyframes`
  0, 100% {
    opacity: 0;
  }
  50% {
    opacity: 70%;
  }
`;

export const PostSuccess = styled.div`
  position: fixed;
  bottom: 100px;
  z-index: 4;
  
  display: ${props => props.isSent ? "flex" : "none"};
  
  align-items: center;
  justify-content: center;
  
  font-size: 2em;

  width: 100%;
  height: 240px;
  
  background-color: #bfbfbf;
  color: #ffffff;
  
  opacity: 0;
  animation: 2s ${fadeInOut} ease-out;
`;