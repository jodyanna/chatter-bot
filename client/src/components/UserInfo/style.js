import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;
  
  width: fit-content;

`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;
`;

export const Text = styled.span`
  font-family: inherit;
  font-size: inherit;
  
  text-align: left;
`;