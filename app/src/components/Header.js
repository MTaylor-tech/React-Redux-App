import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <img src="../BrewDog-Logo.jpg" alt="Brew Dog" />
        <nav>
             <Link to="/">Beer List</Link> | <Link to="/beer/random">Random Beer</Link>
       </nav>
    </header>
  );
}
