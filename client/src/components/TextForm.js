import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';


export default function TextForm(props) {
  const [ count, setCount ] = useState(0);
  const [ text, setText ] = useState("");
  const [ isSent, setIsSent ] = useState(false);

  const validateForm = () => {
    return count < 1 || count > 255
  }

  const handleSubmit = event => {
    event.preventDefault();
    fetch('http://localhost:9000/posts/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({post: text}),
    }).then(() => cleanUpForm())
      .catch(error => console.error('Error:', error));
  }

  const handleChange = event => {
    setCount(event.target.value.length);
    setText(event.target.value);
  }

  const cleanUpForm = () => {
    // Init form and show success message
    setText("");
    setCount(0);
    setIsSent(true);
    setTimeout(() => setIsSent(false), 2000);
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
                value={text}
      />
      <div>
        <span style={{color: validateForm() ? "#ff0000" : "#000000"}}>{count}</span>
        <span>/255</span>
      </div>
      <SubmitButton type="submit"
             value={"Submit"}
             disabled={validateForm()}
      />
      <Success isSent={isSent}>Success!</Success>
    </Form>
  );
}


/**
 * Styled Components
 */

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
  width: 90%;
  height: 100px;

  margin: 1em;
  padding: 0.3em;
  
  font-family: inherit;
  font-size: inherit;
  
  border-radius: 5px;
  
  resize: none;
`;

const SubmitButton = styled.input`
  width: 95%;
  height: 50px;
  
  margin: 1em 0;
  padding: 0;
  
  border-radius: 5px;
`;

const fadeInOut = keyframes`
  0, 100% {
    opacity: 0;
  }
  50% {
    opacity: 70%;
  }
`;

const Success = styled.div`
  position: fixed;
  bottom: 100px;
  z-index: 4;
  
  display: ${props => props.isSent ? "flex" : "none"};
  
  align-items: center;
  justify-content: center;
  
  font-size: 2em;

  width: 100%;
  height: 240px;
  
  background-color: #bfbfbf;
  color: #ffffff;
  
  opacity: 0;
  animation: 2s ${fadeInOut} ease-out;
`;



