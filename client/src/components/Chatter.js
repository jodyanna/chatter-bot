import React, {useState, useEffect}  from 'react';

import styles from './Chatter.module.css';


export default function Chatter(props) {
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
    <section className={styles.section}
             style={{width: props.width, height: props.height}}
    >
      <p>{state}</p>
      <p>{data}</p>
    </section>
  );
}

