import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './assets/componentes/NavBar.jsx';
import ItemListContainer from './assets/componentes/ItemListContainer.jsx';
import ProductCatalog from './assets/componentes/ProductCatalog.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const allProducts = [
    { id: 1, category: 'Hombre', name: 'Camisa para hombre', price: 40000 },
    { id: 2, category: 'Mujer', name: 'Vestido para mujer', price: 50000 },
    { id: 3, category: 'Niños', name: 'Camiseta para niños', price: 15000 },
  ];

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/hombre" element={<ItemListContainer greeting="Bienvenido al catálogo de hombres" category="Hombre" products={allProducts} />} />
          <Route path="/mujer" element={<ItemListContainer greeting="Bienvenido al catálogo de mujeres" category="Mujer" products={allProducts} />} />
          <Route path="/ninos" element={<ItemListContainer greeting="Bienvenido al catálogo de niños" category="Niños" products={allProducts} />} />
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda de ropa" products={allProducts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;