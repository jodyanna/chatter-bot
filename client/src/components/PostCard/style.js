import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
`;

export const PostBody = styled.div`
  display: block;
  box-sizing: border-box;
  
  width: 100%;
  
  margin: 0;
  padding: 0.5em;
  
  background: #3282b8;
  
  border: #0f4c75 solid 2px;
  border-radius: 5px;
  
  word-wrap: break-word;
`;

export const PostFooter = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  justify-content: flex-end;
  
  width: 100%;
  
  margin: 0 0 1em 0;

`;

export const GreyText = styled.span`
  font-family: inherit;
  font-size: 1em;
  font-weight: bold;
  font-style: italic;
    
  color: #9e9e9e;
`;

export const SmGreyText = styled.span`
  font-family: inherit;
  font-size: 0.7em;
  font-weight: bold;
    
  color: #9e9e9e;
`;