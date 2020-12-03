import styled from "styled-components";


export const Container = styled.div`
  z-index: 2;

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

export const TextRow = styled.div`
  margin: 0.2em 0;
  padding: 0;
`;

export const Button = styled.button`
  margin: 0.5em;
  padding: 0;
  
  border: none;
  border-radius: 5px;
  
  background: none;
  
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
    
  color: #3282b8;
  
  &:hover {
    cursor: pointer;
  }
`;

export const RedText = styled.span`
  margin: 0.5em 0 0 0;

  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
    
  color: #a83232;
`;