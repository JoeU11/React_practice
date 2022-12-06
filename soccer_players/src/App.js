import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import Player from "./components/player"
import axios from 'axios';
import players from './playersData'

function App() {
  console.log(players)

  return (
    <div className="App">
      <Header />
      <Player />
    </div>
  );
}

export default App;
