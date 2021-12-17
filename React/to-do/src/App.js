import React, {useState} from 'react';
import Form from './components/Form'
import './App.css';

function App() {

  const [list, setList] = useState([])
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      To Do:
    </h1>
    <Form list={list} setList={setList}/>
    </div>
  );
}

export default App;
