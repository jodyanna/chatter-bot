import React, { useState } from 'react';
import styles from './TextForm.module.css';

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea name="post"
                cols={29}
                rows={9}
                onChange={e => {
                  setCount(e.target.value.length);
                  setText(e.target.value);
                }}
      />
      <span>{count}</span>
      <input type="submit" value={"Submit"} />
    </form>
  );
}