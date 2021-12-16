import React, {useState} from 'react';
import Form from './components/Form'
import Display from './components/Display'
import './App.css';

function App() {

  const [list, setList] = useState([])
  const[checker, setChecker] = useState(false)
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      To Do:
    </h1>
    <Form list={list} setList={setList} checker={checker}/>
    <Display list={list} setList={setList} checker={checker} setChecker={setChecker}/>
    </div>
  );
}

export default App;
