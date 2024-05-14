import React from 'react';
import './Navbar.css'; // Import your CSS file

function NavigationMenu() {
  return (
    <ul className="nav-links">
      <li><a href="/home">Home</a></li>
      <li><a href="/home#about">About</a></li>
      <li><a href="/slot">Slot</a></li>
      <li><a href="/home#FaqSection">FAQ</a></li>
      <li><a href="/home#Contact">Contact</a></li>
      <li className="Project">COVIDHUB</li>
    </ul>
  );
}

export default NavigationMenu;
