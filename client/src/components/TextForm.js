import React, { useState } from 'react';
import styled from "styled-components";


const Form = styled.form`
  position: fixed;
  bottom: 100px;
  z-index: 2;

  display: ${props => props.isActive ? "flex" : "none"};
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: fit-content;

  margin: 0;
  padding: 0;
  
  background-color: rgb(73, 209, 255);
`;

const TextArea = styled.textarea`
  width: 95%;
  height: 100px;

  margin: 1em;
  padding: 0;
  
  font-family: inherit;
  font-size: inherit;
  
  resize: none;
`;

const SubmitButton = styled.input`
  width: 95%;
  height: 50px;
  
  margin: 1em 0;
  padding: 0;
`;


export default function TextForm(props) {
  const [ count, setCount ] = useState(0);
  const [ text, setText ] = useState("");

  const validateForm = () => {
    return count < 1 || count > 255
  }

  const handleSubmit = event => {
    event.preventDefault();
    fetch('http://localhost:9000/listen', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({post: text}),
    }).catch((error) => console.error('Error:', error));
  }

  const handleChange = event => {
    setCount(event.target.value.length);
    setText(event.target.value);
  }

  return (
    <Form
      onSubmit={handleSubmit}
      isActive={props.isActive}
    >
      <TextArea name="post"
                cols={29}
                rows={9}
                onChange={handleChange}
      />
      <div>
        <span style={{color: validateForm() ? "#ff0000" : "#000000"}}>{count}</span>
        <span>/255</span>
      </div>
      <SubmitButton type="submit"
             value={"Submit"}
             disabled={validateForm()}
      />
    </Form>
  );
}