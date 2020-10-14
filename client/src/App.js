import React from 'react';
import './App.css';

import Listen from './components/Listen';
import Chatter from "./components/Chatter";


function App() {

  return (
    <div className={"app"}>
      <Listen />
      <hr/>
      <Chatter />
    </div>
  );
}

export default App;
