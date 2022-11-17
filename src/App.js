import './App.css';
import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';
import {AddThought} from './AddThought.js';
import {Thought} from './Thought.js'
import './styles.css'



function App() {

  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "Add your thoughts",
      expiresAt:getNewExpirationTime()
    },
    {
      id : generateId(),
      text: "The thoughts will disappear in 15 seconds",
      expiresAt: getNewExpirationTime()

    }

  ]);

  const addThought = (thought)=>{
    setThoughts((prev)=>[thought, ...prev]);
  }

  const removeThought = (thought)=>{
    setThoughts((prev)=>prev.filter((dream)=>dream.id!==thought.id));
  }


  return (
    <div className="App">

      <header><h1>Passing Thoughts</h1></header>
      

      <AddThought addThought= {addThought}/>
      <ul>{thoughts.map((thought)=><Thought thought = {thought} removeThought={removeThought} />)}</ul>
      
    </div>
  );
}

export default App;
