import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import image from './logo192.png';

function Header() {
  return (
    <header className="nav">
      <img className="nav-logo" src={image} alt="react logo" />
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  )
}

function Footer() {
  return (
    <footer><small>Practice Footer</small></footer>
  )
}

function ReactReasons() {
  return (
    <div>
      <h1>Reasons I'm learning React</h1>
      <ul>
        <li>It's fun!</li>
        <li>React is one of if not the most popular frontend framework</li>
        <li>React has a lot of utility and some really cool design features</li>
      </ul>
    </div>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <ReactReasons />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
