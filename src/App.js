import React, { useState, useEffect } from 'react';
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { GameBlock } from "./components/game-block";
import { DiceRoller } from "./components/dice-roller";

import './Styles/style.scss'

function App() {

const [activeFilters, setActiveFilters] = useState('');

const handleUpdate = (input) => {
    setActiveFilters(input);
};
console.log(activeFilters);
  return (
    <div className="App">
      <Header handleUpdate={handleUpdate}/>
      <div id="page-top"></div>
      <div className="main-container">
        <GameBlock activeFilters={activeFilters}/>
        <DiceRoller />
      </div>
      <Footer />
    </div>
  );
}

export default App;
