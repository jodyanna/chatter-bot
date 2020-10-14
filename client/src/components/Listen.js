import React, {useState, useEffect}  from 'react';
import TextForm from "./TextForm";

import styles from "./Listen.module.css";


export default function Listen(props) {


  return (
    <section className={styles.section}
             style={{width: props.width, height: props.height}}
    >
      <TextForm />
    </section>
  );
}
