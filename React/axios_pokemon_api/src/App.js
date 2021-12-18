import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=809`)
     .then((res)=>{
      console.log(res.data)
      setPokemon(res.data.results)})
     .catch((err)=>console.error(err))
  },[])

  return (
    <div className="App">
      <h1 class="fs-1">Pokemon List:</h1>

      {
        pokemon.map((poke, index)=>(
          <div>
            <p>{poke.name}</p>
          </div>
          
        ))
      }
    </div>
  );
}

export default App;
