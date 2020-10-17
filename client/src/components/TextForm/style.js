import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    transform: translateY(+100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(+100%);
  }
`;

export const Form = styled.form`
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
  
  background: #0f4c75;
  
  transform: translateY(0);
  animation: ${props => props.isActive ? fadeIn : fadeOut} 200ms ease-in;
  transition: visibility 200ms ease-in;
`;

export const TextArea = styled.textarea`
  width: 90%;
  height: 100px;

  margin: 1em 0 0.2em 0;
  padding: 0.3em;
  
  font-family: inherit;
  font-size: inherit;
  
  border-radius: 5px;
  
  resize: none;
`;

export const StatusRow = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  justify-content: flex-end;

  width: 95%;
  height: 40px;
  
  margin: 0;
  padding: 0;
`;

export const TextCounter = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  justify-content: center;

  width: 50px;
  
  margin: 0.5em;
  padding: 0;
`;

export const SubmitButton = styled.input`
  width: fit-content;
  
  margin: 0.5em;
  padding: 0;
  
  border: none;
  border-radius: 5px;
  
  background: none;
  
  font-family: inherit;
  font-size: inherit;
  
`;
