import React, { useState } from 'react';

export default function TextForm() {
  const [ count, setCount ] = useState(0);
  const [ text, setText ] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:9000/listen', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({post: text}),
    }).catch((error) => console.error('Error:', error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="post"
                onChange={e => {
                  setCount(e.target.value.length);
                  setText(e.target.value);
                }}
      />
      <span>{count}</span>
      <input type="submit" />
    </form>
  );
}