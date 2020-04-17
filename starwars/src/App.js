import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import Character from './components/Character'

const url = 'https://swapi.py4e.com/api/people/'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([])
  useEffect(() => {
    axios.get(`${url}`)
    .then(res =>{
      setCharacterData(res.data.results)
    })
    .catch(err => {
      console.log(err)
      debugger
    })
    },
  []);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  console.log('characterData is ',characterData)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characterData.map((event) => <Character key={event.name} character={event}/>)}
      {/* <Character characterData={characterData}/> */}
    </div>
  );
}

export default App;
