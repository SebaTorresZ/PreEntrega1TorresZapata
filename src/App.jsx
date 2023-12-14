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
        <ItemListContainer greeting="Bienvenido a nuestra tienda de ropa" />
        <Routes>
          <Route path="/hombre" element={<ProductCatalog category="Hombre" />} />
          <Route path="/mujer" element={<ProductCatalog category="Mujer" />} />
          <Route path="/ninos" element={<ProductCatalog category="Niños" />} />
          <Route path="/" element={<ProductCatalog />} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;