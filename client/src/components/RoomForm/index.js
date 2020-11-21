import React, { useState, useEffect } from 'react';
import { Form, TextInput, SubmitButton } from './style';


export default function RoomForm(props) {
  const [ text, setText ] = useState("");
  const [ allRooms, setAllRooms ] = useState([]);

  useEffect(() => {
    const fetchRequest = async () => {
      const response = await fetch('/rooms/all', {
        method: 'GET',
      }).catch(error => console.error('Error:', error));
      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(data)
      } else return Promise.reject("Could not connect to API.")
    };
    fetchRequest().then(res => {
      let allRooms = [];
      for (let room of res.rooms) {
        allRooms.push(room.name)
      }
      setAllRooms(allRooms)
    })
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    if (allRooms.includes(text)) {
      alert(`Room '${text}' already exists.`);
      return
    }
    fetch('http://localhost:9000/rooms/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        room: {name: text}
      }),
    }).then(() => cleanUpForm())
      .then(props.refreshRooms())
      .catch(error => console.error('Error:', error));
  }

  const handleChange = event => setText(event.target.value);

  const validateForm = () => text.length < 1 || text.length > 50

  const cleanUpForm = () => setText("");

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
