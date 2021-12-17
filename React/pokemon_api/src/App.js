import React, {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [pokeNumber, setPokeNumber] = useState(1)

  const [pokemon, setPokemon] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState([])
  const pokeIndex = 1

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
     .then(res => res.json())
     .then(res => {
      console.log(res) 
      setPokemon(res)
      
    })
     .catch(err => console.log(err))
  },[pokeNumber])



  useEffect(() => {
    {
      if(pokeNumber <= 808){
        setCurrentPokemon([...currentPokemon,pokemon])
        setPokeNumber(pokeNumber+1)
        
        
        
      }
      else{
        setPokeNumber(pokeNumber)
      }
    }
  },[pokemon])

  const getPokemon = () => {
    currentPokemon.map((current, index) => (
      <div>
        <p>{currentPokemon[current.pokeNumber].name}</p>
      </div>

    ))
  }

  return (
    <div className="App">
      
      <p>Hi</p>
      <p>{currentPokemon[pokeIndex].name}</p>
      {/* <button onClick={getPokemon}>Fetch Pokemon</button> */}
      {/* {
      currentPokemon.map((current, index) => (
      <div>
        <p>{currentPokemon[].name}</p>
      </div> */}
      

    {/* ))} */}
      
      
    </div>
  );
}

export default App;
