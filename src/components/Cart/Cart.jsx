import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);
    if(cantidadTotal === 0){
        return ( 
            <>
                <p>No hay productos en el carrito.</p>
                <Link to="/">Ver Productos</Link>
            </>
        )
    }
  return (
    <div>
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)
        }
        <p>Total: $ {total}</p>
        <p>Cantidad total de items: {cantidadTotal}</p>
        <button onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
        <Link to="/checkout">Finalizar Compra</Link>
    </div>
  )
}

export default Cart