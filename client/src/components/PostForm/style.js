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
