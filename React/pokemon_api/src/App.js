import React, {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [pokeNumber, setPokeNumber] = useState(1)

  const [pokemon, setPokemon] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState([])
  const pokeIndex = 1

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=809`)
     .then(res => res.json())
     .then(res => {
      console.log(res) 
      setPokemon(res.results)
      
    })
     .catch(err => console.log(err))
  },[])



  


  return (
    <div className="App">
      
      <h1>Pokemon List:</h1>
      
      
      {
      pokemon.map((current, index) => (
      <div>
        <p>{current.name}</p>
      </div> 
      

     ))}
      
      
    </div>
  );
}

export default App;
