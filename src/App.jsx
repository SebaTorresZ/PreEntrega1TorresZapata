import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './assets/componentes/NavBar.jsx';
import ItemListContainer from './assets/componentes/ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/hombre" element={<ItemListContainer greeting="Bienvenido al catálogo de hombres" category="Hombre" />} />
          <Route path="/mujer" element={<ItemListContainer greeting="Bienvenido al catálogo de mujeres" category="Mujer" />} />
          <Route path="/ninos" element={<ItemListContainer greeting="Bienvenido al catálogo de niños" category="Niños" />} />
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda de ropa" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;