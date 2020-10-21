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

export const ProfilePic = styled.div`
  width: 140px;
  height: 180px;
  
  margin: 0.5em;
  padding: 0;
  
  border: #ffffff dashed 2px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  width: 150px;
  height: 100%;

  margin: 0.5em;
  padding: 0;
`;

export const TextRow = styled.div`
  margin: 0.5em 0;
  padding: 0;
`;