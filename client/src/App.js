import React from 'react';
import './App.css';

import Listen from './components/Listen';
import Chatter from "./components/Chatter";


function App() {
  const secWidth = window.innerWidth;
  const secHeight = window.innerHeight;

  return (
    <div>
      <Listen width={secWidth} height={secHeight}/>
      <hr/>
      <Chatter width={secWidth} height={secHeight}/>
    </div>
  );
}

export default App;
