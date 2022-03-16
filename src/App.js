import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { GameBlock } from "./components/game-block";
import { DiceRoller } from "./components/dice-roller";

import './Styles/style.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div id="page-top"></div>
      <div className="main-container">
        <GameBlock />
        <DiceRoller />
      </div>
      <Footer />
    </div>
  );
}

export default App;
