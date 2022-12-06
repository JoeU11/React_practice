import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import Player from "./components/player"
import axios from 'axios';

// function getData() {
//   axios.get("http://localhost:3000/players").then(response => (
//     response = response.data
//   ))
// }

function App() {
  return (
    <div className="App">
      <Header />
      <Player />
    </div>
  );
}

export default App;
