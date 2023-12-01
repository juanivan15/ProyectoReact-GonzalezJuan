import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a Mi Tienda Gamer"/>
    </div>
  )
}

export default App
