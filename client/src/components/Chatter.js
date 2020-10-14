import React, {useState, useEffect}  from 'react';


export default function Chatter() {
  const [state, setState] = useState("loading");
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9000/chatter");
      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(data.post.post_text)
      } else {
        return Promise.reject("Could not connect to API.")
      }
    };
    fetchData().then(res => setData(res));
    setState("loaded");
  }, []);

  return (
    <div>
      <p>{state}</p>
      <p>{data}</p>
    </div>
  );
}

