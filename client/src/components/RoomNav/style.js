import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  
  width: 95vw;
  height: 10vh;

  margin: 0.5em 1em;
  padding: 0;
  
  overflow: scroll;
  
  &:hover {
    cursor: pointer;
  }
`;

export const ListItem = styled.li`
  text-align: center;
  
  margin: 0.5em 0.5em;
  padding: 0;

  font-family: inherit;
  font-size: inherit;
  font-weight: bold;

  color: #3282b8;

  list-style: none;
 
`;