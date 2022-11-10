import React from 'react'
import logo from './logo192.png'

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="react logo" className="nav-logo" />
        <h1 id="title">My React Journey</h1>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}