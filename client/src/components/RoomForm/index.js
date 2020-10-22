import React, { useState } from 'react';
import { Form, TextInput } from './style';
import { PostSuccess } from '../PostSuccess';
import { SubmitButton } from "./style";


export default function RoomForm(props) {
  const [ text, setText ] = useState("");
  const [ isSent, setIsSent ] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    fetch('http://localhost:9000/rooms/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        room: {name: text}
      }),
    }).then(() => cleanUpForm())
      .catch(error => console.error('Error:', error));
  }

  const handleChange = event => {
    setText(event.target.value);
  }

  const validateForm = () => text.length < 1 || text.length > 50

  const cleanUpForm = () => {
    // Init form and show success message
    setText("");
    setIsSent(true);
    setTimeout(() => setIsSent(false), 2000);
  }

  return (
    <Form
      onSubmit={handleSubmit}
      isActive={props.isActive}
    >
      <TextInput onChange={handleChange}
                 value={text}
      />
      <SubmitButton type="submit"
                    value={"Create Room"}
                    disabled={validateForm()}
      />
    </Form>
  );
}
