import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './assets/componentes/NavBar.jsx';
import ItemListContainer from './assets/componentes/ItemListContainer.jsx';
import ProductCatalog from './assets/componentes/ProductCatalog.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/hombre" element={<ItemListContainer greeting="Bienvenido a la sección de hombres" />} />
          <Route path="/mujer" element={<ItemListContainer greeting="Bienvenido a la sección de mujeres" />} />
          <Route path="/ninos" element={<ItemListContainer greeting="Bienvenido a la sección de niños" />} />
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda de ropa" />} />
        </Routes>
        <ProductCatalog />
      </div>
    </Router>
  );
};

export default App;
