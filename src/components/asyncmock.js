
const productos = [
  {
    id: "1",
    nombre: "Redragon Kumara K552",
    precio: 40000,
    img: "../img/teclado.jpg",
    idCat:"1",
    descri: "El mejor teclado para usos multiples: jugar, codear, redactar. Tu mejor opción para introducirte al mundo gamer!",
    stock: 6
  },
  {
    id: "2",
    nombre: "Hyperx Cloud Alpha",
    precio: 50000,
    img: "../img/auris.webp",
    idCat:"1",
    descri: "Muy buena experiencia de sonido al mejor precio!",
    stock: 9
  },
  {
    id: "3",
    nombre: "Logitech G305",
    precio: 25000,
    img: "../img/mouse.jpg",
    idCat:"1",
    descri: "Este mouse es sinónimo de confiabilidad y precisión, tu mejor opción!",
    stock: 4
  },
  {
    id: "4",
    nombre: "Gigabyte G24F",
    precio: 100000,
    img: "../img/monitor.jpg",
    idCat:"2",
    descri: "Un monitor con diversas configuraciones de gaming, lectura, cine, un verdadero todoterreno.",
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