import React from 'react';
import NavBar from './assets/componentes/NavBar.jsx';
import ItemListContainer from './assets/componentes/ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a nuestra tienda de ropa" />
    </div>
  );
};

export default App;
