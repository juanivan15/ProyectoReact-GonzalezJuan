
const productos = [
  {
    id: "1",
    nombre: "Teclado Redragon Kumara",
    precio: 40000,
    img: "../img/teclado.jpg",
    idCat:"1",
    stock: 6
  },
  {
    id: "2",
    nombre: "Auriculares Hyperx",
    precio: 50000,
    img: "../img/auris.webp",
    idCat:"2",
    stock: 9
  },
  {
    id: "3",
    nombre: "Mouse Logitech G305",
    precio: 25000,
    img: "../img/mouse.jpg",
    idCat:"1",
    stock: 4
  },
  {
    id: "4",
    nombre: "Monitor Gigabyte",
    precio: 100000,
    img: "../img/monitor.jpg",
    idCat:"1",
    stock: 2
  }
]

export const getProductos = () => {
  return new Promise(resolve => {
    setTimeout(()=>{resolve(productos)}, 200)
  }) 
}

export const getUnProducto = (id) => {
  return new Promise( resolve => {
      setTimeout( () => {
          const producto = productos.find(item => item.id === id);
          resolve(producto);
      }, 100)
  })
}

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise(resolve => {
      setTimeout(()=> {
          const productosCategoria = productos.filter(item => item.idCat === idCategoria );
          resolve(productosCategoria);
      }, 100)
  })
}