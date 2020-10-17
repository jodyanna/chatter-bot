import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: inherit;
  height: 100px;

  background-color: rgb(73, 209, 255);
`;

export const Button = styled.button`
  width: 95%;
  height: 50px;
  
  margin: 1em 0;
  padding: 0;
`;