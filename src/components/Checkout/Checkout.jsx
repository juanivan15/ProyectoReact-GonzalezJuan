import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import './Checkout.css';

const Checkout = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState("");

    const formDriver = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa los campos!");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los emails no coinciden");
            return;
        }

        const order = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        addDoc(collection(db, "orders"), order)
            .then(docRef => {
                setOrderId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden", error);
                setError("No se pudo crear la orden. El codigo no es de la NASA.")
            })
    }



    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={formDriver} className="formulario">
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre} X {producto.cantidad}</p>
                            <p>Precio unitario: ${producto.item.precio}</p>
                            <hr />
                        </div>
                    ))
                }
                <p>Total a pagar: ${total}</p>
                <hr />
                <div className="form-group">
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Telefono</label>
                    <input type="text" onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirmación de email</label>
                    <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button type="submit">Finalizar Orden</button>

                {
                    orderId && (
                        <strong className="orderId">Gracias por su compra! Su órden es: {orderId}</strong>
                    )
                }
            </form>
        </div>
    )
}

export default Checkout