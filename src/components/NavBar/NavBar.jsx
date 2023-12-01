import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <h1>Tienda Gamer</h1>

        <nav>
            <ul>
                <li>Motherboards</li>
                <li>Placas de video</li>
                <li>Procesadores</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar