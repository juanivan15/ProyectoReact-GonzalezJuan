import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, stock, precio, descri, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);



  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      <p>{descri}</p>
      <img src={img} alt={nombre} />
      <hr />
      {
        agregarCantidad > 0 ? (<button><Link to="/cart">Terminar Compra</Link></button>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
      <button><Link to="/">Seguir comprando</Link></button>
    </div>
  )
}

export default ItemDetail