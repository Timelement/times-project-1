import React, { useState, useEffect } from 'react';
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { GameBlock } from "./components/game-block";
import { DiceRoller } from "./components/dice-roller";

import './Styles/style.scss'

function App() {

const [activeFilters, setActiveFilters] = useState('');

const [newActivity, setActivity] = useState('');

const handleUpdate = (input) => {
    setActiveFilters(input);
};

const fetchActivity = async() => {
  const url = 'https://www.boredapi.com/api/activity';
  await fetch(url).then(response => response.json()).then(data => {
    console.log(data);
    const { activity } = data;
    console.log(activity);
    setActivity(activity);
  });
}

console.log(activeFilters);
  return (
    <div className="App">
      <Header handleUpdate={handleUpdate}/>
      <div id="page-top"></div>
      <div className="main-container">
        <GameBlock activeFilters={activeFilters}/>
        <DiceRoller />
      </div>
      <div className="promise-container">
        <button className='btn' onClick={() => fetchActivity()}>
          <h3>I'm bored. Give me something to do.</h3>
        </button>
        <div className='promise-response-container'>
        { newActivity }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
