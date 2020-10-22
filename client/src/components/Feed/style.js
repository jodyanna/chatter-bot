import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;
  
  overflow: scroll;
`;

export const StatusText = styled.div`
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  
  color: #3282b8;
`;

export const Filler = styled.div`
  position: absolute;
  
  display: block;
  
  width: 100%;
  height: 100px;
  
  background: #1b262c;
  content: none;
  visibility: hidden;
`;