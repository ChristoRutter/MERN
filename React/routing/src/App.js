import React, {useState} from 'react';
import {Router, Link} from '@reach/router';
import './App.css';
import Home from './components/Home'
import Four from './components/Four'
import Color from './components/Color';
import String from './components/String'

function App() {
  const [number, setNumber] = useState(0)

  return (
    <div className="App">
      <div>
        <Link to = "/Home">Home</Link>
        <Link to = "/:number">Number</Link>
      </div>

      <form>
        <label>Enter a number: </label>
        <input onChange={(e)=> setNumber(e.target.value)} type="number" value = {number} name="number"></input>
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
