import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { GameBlock } from "./components/game-block"

import './Styles/style.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <GameBlock />
      <Footer />
    </div>
  );
}

export default App;
