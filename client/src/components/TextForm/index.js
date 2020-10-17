import React, { useState } from 'react';
import { Form, TextArea, SubmitButton } from "./style";
import { PostSuccess } from "../PostSuccess";


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
      <PostSuccess isSent={isSent}>Posted</PostSuccess>
    </Form>
  );
}
