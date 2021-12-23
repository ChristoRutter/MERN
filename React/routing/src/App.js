import React, {useState} from 'react';
import {Router, Link} from '@reach/router';
import './App.css';
import Home from './components/Home'
import Color from './components/Color';

function App() {
  const [text, setText] = useState("")
  const [color, setColor] = useState("")
  const [bcolor ,setBColor] = useState("")

  return (
    <div className="App">
      <div>
        <Link to = "/Home">Home</Link>
      </div>

      <form>
        

        <Link to = {`/${text}/${color}/${bcolor}`}>Word</Link>
        <p>
        <label>Enter a word/phrase: </label>
        <input onChange={(e)=> setText(e.target.value)} type="text" value = {text} name="text"></input>
        </p>
        <p>
        <label>Enter a text color: </label>
        <input onChange={(e)=> setColor(e.target.value)} type="text" value = {color} name="text"></input>
        </p>
        <p>
        <label>Enter a background color: </label>
        <input onChange={(e)=> setBColor(e.target.value)} type="text" value = {bcolor} name="text"></input>
        </p>

      </form>

      <Router>
        <Home path="/Home" />
        <Color path="/:string" />
        <Color path="/:string/:color/:bcolor" />
        
      </Router>
    </div>
  );
}

export default App;
