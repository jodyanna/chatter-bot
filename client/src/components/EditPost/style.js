import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: inherit;
  height: 10vh;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  
  margin: 0;
  padding: 0;
  
  border: none;
  border-radius: 5px 5px 0 0;
  
  background: #0f4c75;
  
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  
  cursor: pointer;
`;