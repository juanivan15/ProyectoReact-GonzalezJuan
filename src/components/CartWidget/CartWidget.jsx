import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imagenCarrito = "https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png";
  return (
    <div>
        <img src={imagenCarrito} alt="carritoDeCompras" className='imgCarrito' />
        <p>2</p>
    </div>
  )
}

export default CartWidget