import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;
  
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  
  align-items: center;
  justify-content: center;
  
  width: 96%;
  height: 100px;
  
  margin: 0;
  padding: 0;
  
  background: #1b262c;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  justify-content: flex-start;
  
  width: 100%;
  height: 100%;
  
  background: #1b262c;
`;

export const H2 = styled.h2`
  text-align: center;
  
  margin: 0.3em;
  padding: 0;
  
  word-break: break-word;
`;