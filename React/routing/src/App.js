import React, {useState} from 'react';
import {Router, Link} from '@reach/router';
import './App.css';
import Home from './components/Home'
import Four from './components/Four'
import Color from './components/Color';
import String from './components/String'

function App() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState("")
  const [color, setColor] = useState("")
  const [bcolor ,setBColor] = useState("")

  return (
    <div className="App">
      <div>
        <Link to = "/Home">Home</Link>
      </div>

      <form>
        <Link to = {`/${number}`}>Number</Link>
        <p>
        <label>Enter a number: </label>
        <input onChange={(e)=> setNumber(e.target.value)} type="number" value = {number} name="number"></input>
        </p>

        <Link to = {`/String/${text}`}>Word</Link>
        <p>
        <label>Enter a word/phrase: </label>
        <input onChange={(e)=> setText(e.target.value)} type="text" value = {text} name="text"></input>
        </p>

        <Link to = {`Color/${text}/${color}/${bcolor}`}>Add color</Link>
        <p>
        <label>Change the color of the text: </label>
        <input onChange={(e)=> setColor(e.target.value)} type="text" value = {color} name="color"></input>
        </p>
        <p>
        <label>Change the background color of the text: </label>
        <input onChange={(e)=> setBColor(e.target.value)} type="text" value = {bcolor} name="bcolor"></input>
        </p>
      </form>

      <Router>
        <Home path="/Home" />
        <Four path="/:number" />
        <String path="String/:string" />
        <Color path="Color/:string/:color/:bcolor" />
        
      </Router>
    </div>
  );
}

export default App;
