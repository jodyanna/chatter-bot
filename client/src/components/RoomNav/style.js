import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  height: 200px;

  margin: 0;
  padding: 0;
  
  overflow: scroll;
  
  &:hover {
    cursor: pointer;
  }
`;

export const ListItem = styled.li`
  text-align: center;
  
  margin: 0.5em;
  padding: 0 0 0.5em 0;

  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
    
  color: #3282b8;

  list-style: none;
`;