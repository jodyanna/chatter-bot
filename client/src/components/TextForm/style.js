import styled, {keyframes} from "styled-components";

export const Form = styled.form`
  position: fixed;
  bottom: 100px;
  z-index: 2;

  display: ${props => props.isActive ? "flex" : "none"};
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: inherit;
  height: fit-content;

  margin: 0;
  padding: 0;
  
  background-color: rgb(73, 209, 255);
`;

export const TextArea = styled.textarea`
  width: 90%;
  height: 100px;

  margin: 1em;
  padding: 0.3em;
  
  font-family: inherit;
  font-size: inherit;
  
  border-radius: 5px;
  
  resize: none;
`;

export const SubmitButton = styled.input`
  width: 95%;
  height: 50px;
  
  margin: 1em 0;
  padding: 0;
  
  border-radius: 5px;
`;
