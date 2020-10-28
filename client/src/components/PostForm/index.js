import React, { useState } from 'react';
import { Form, TextArea, SubmitButton, StatusRow, TextCounter } from './style';


export default function PostForm(props) {
  const [ count, setCount ] = useState(0);
  const [ text, setText ] = useState("");

  const validateForm = () => count < 1 || count > 255

  const handleSubmit = event => {
    event.preventDefault();
    fetch('http://localhost:9000/posts/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        post: text,
        room: {id: props.room.id},
        user: {id: props.user.id}
      }),
    }).then(() => cleanUpForm())
      .then(props.refreshFeed())
      .catch(error => console.error('Error:', error));
  }

  const handleChange = event => {
    setCount(event.target.value.length);
    setText(event.target.value);
  }

  const cleanUpForm = () => {
    setText("");
    setCount(0);
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
      <StatusRow>
        <TextCounter>
          <span style={{color: validateForm() ? "#a83232" : "inherit"}}>{count}</span>/255
        </TextCounter>
        <SubmitButton type="submit"
                      value={"Send"}
                      disabled={validateForm()}
        />
      </StatusRow>
    </Form>
  );
}
