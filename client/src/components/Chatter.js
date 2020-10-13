import React, {useState, useEffect}  from 'react';


export default function Chatter() {
  const [state, setState] = useState("idle");
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setState("loading");
      const response = await fetch("http://localhost:9000/chatter");
      if (response.ok) {
        const data = await response.text();
        return Promise.resolve(data)
      } else {
        return Promise.reject("Could not connect to API.")
      }
    };
    fetchData().then(r => setData(r));
    setState("loaded");
  }, []);

  return (
    <div>
      <p>{state}</p>
      <p>{data}</p>
    </div>
  );
}

