import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
        review_score="5.0"
        review_total="10"
        country="USA"
        description="Life lessons with the Rock"
        price="150"
      />
    </div >
  );
}

export default App;
