import React, { useState } from 'react';

export default function TextForm() {
  const [ count, setCount ] = useState(0);

  return (
    <form action={"http://localhost:9000/listen"}
          method={"post"}
    >
      <textarea name="post"
                onChange={e => setCount(e.target.value.length)}
      />
      <span>{count}</span>
      <input type="submit" />
    </form>
  );
}