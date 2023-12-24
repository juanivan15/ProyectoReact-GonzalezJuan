import { useState } from "react";
import './Contador.css';

const Contador = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);
    

    const sumarContador = () => {
        if(contador < stock ){
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

  return (
    <>
        <button onClick={restarContador} className="btnCont"> - </button>
        <p className="numContador"> {contador} </p>
        <button onClick={sumarContador} className="btnCont"> + </button>

        <button onClick={()=> funcionAgregar(contador)} className="btnCont"> Agregar al Carrito </button>
    </>
  )
}

export default Contador