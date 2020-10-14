import React, { useState } from 'react';
import styles from './TextForm.module.css';

export default function TextForm() {
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
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea name="post"
                cols={29}
                rows={9}
                onChange={handleChange}
      />
      <div>
        <span style={{color: validateForm() ? "#ff0000" : "#000000"}}>{count}</span><span>/255</span>
      </div>
      <input type="submit"
             value={"Submit"}
             disabled={validateForm()}
      />
    </form>
  );
}