import React from 'react'
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="../img/mi-tienda.png" alt="Mi tienda gamer" className='logoNavBar' />
      </Link>

        <nav>
            <ul>
             <li>
              <NavLink to="categoria/1">Perifericos</NavLink>
             </li>
             <li>
              <NavLink to="categoria/2">Monitores</NavLink>
             </li>
             <li>
              <NavLink to="categoria/3">Procesadores</NavLink>
             </li>
             <li>
              <NavLink to="categoria/4">Placas de Video</NavLink>
             </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar