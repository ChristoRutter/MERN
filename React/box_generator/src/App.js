import React, {useState}from 'react'
import Form from './components/Form'
import Display from './components/Display'
import './App.css';

function App() {

  const [box, setBox]= useState([])
  return (
    <div className="App">
      <Form box={box} setBox={setBox}/>
      <Display box={box}/>
    </div>
  );
}

export default App;
