import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imagenCarrito = "../img/carrito.png";
  return (
    <div>
        <img src={imagenCarrito} alt="carritoDeCompras" className='imgCarrito' />
        <p>2</p>
    </div>
  )
}

export default CartWidget