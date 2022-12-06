import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import Player from "./components/player"
import axios from 'axios';
import players from './playersData'

function App() {
  const playerElements = players.map(player => {
    console.log("generating player elements")
    return <Player
      key={player.id}
      img={player.img}
      name={player.name}
      team={player.team}
      number={player.number}
      inWorldCup={player.inWorldCup}
    />
  })

  return (
    <div className="App">
      <Header />
      <section id="player-list">
        {playerElements}
      </section>
    </div>
  );
}

export default App;
