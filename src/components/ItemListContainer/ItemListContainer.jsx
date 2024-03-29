import './ItemListContainer.css';
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from '../../services/config';
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos);
      })
      .catch(error => <h2>Esto no es muy majestuoso de tu parte.{error}</h2>);

  }, [idCategoria])

  return (
    <div>
      <h2> Mira los productos que tenemos para vos! </h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer