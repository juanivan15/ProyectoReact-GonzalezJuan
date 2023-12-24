import React from 'react'
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Mi Tienda Gamer</h1>
      </Link>

        <nav>
            <ul>
             <li>
              <NavLink to="categoria/1">Esenciales</NavLink>
             </li>
             <li>
              <NavLink to="categoria/2">Adicionales</NavLink>
             </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar