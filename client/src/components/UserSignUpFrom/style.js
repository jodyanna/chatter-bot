import styled from "styled-components";


export const Form = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;
  
  background: #1b262c;
`;

export const Label = styled.label`
  margin: 0.5em 0 0 0;
  padding: 0;
  
  font-family: inherit;
  font-size: inherit;
`;

export const TextInput = styled.input`
  margin: 0 0 0.2em 0;
  padding: 0.3em;
  
  font-family: inherit;
  font-size: inherit;
  
  border-radius: 5px;
  
  resize: none;
`;

export const SubmitButton = styled.input`
  margin: 0.5em;
  padding: 0;
  
  border: none;
  border-radius: 5px;
  
  background: none;
  
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
    
  color: #3282b8;
  
  &:disabled {
    color: grey;
    cursor: not-allowed;
  }
  
  &:hover:enabled {
    cursor: pointer;
  }
`;