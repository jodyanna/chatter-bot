import styled from "styled-components";


export const Button = styled.button`
  display: flex;
  
  align-items: center;
  justify-content: center;
  
  margin: 0 0.5em;
  padding: 0;
  
  border: solid 3px ${props => props.isActive ? "#ffffff" : "transparent"};
  border-radius: 5px;
  
  background: #0f4c75;
  
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  
  cursor: pointer;
`;