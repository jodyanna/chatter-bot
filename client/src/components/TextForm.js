import React, { useState } from 'react';
import styled from "styled-components";


const Form = styled.form`
  display: ${props => props.isActive ? "flex" : "none"};
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 300px;

  margin: 0;
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
      <textarea name="post"
                cols={29}
                rows={9}
                onChange={handleChange}
      />
      <div>
        <span style={{color: validateForm() ? "#ff0000" : "#000000"}}>{count}</span>
        <span>/255</span>
      </div>
      <input type="submit"
             value={"Submit"}
             disabled={validateForm()}
      />
    </Form>
  );
}