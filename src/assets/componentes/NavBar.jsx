import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" style={{ marginLeft: '20px' }}>
      <Navbar.Brand as={Link} to="/">
        StreetSculpt
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/hombre">
          Hombre
        </Nav.Link>
        <Nav.Link as={Link} to="/mujer">
          Mujer
        </Nav.Link>
        <Nav.Link as={Link} to="/ninos">
          Niños
        </Nav.Link>
      </Nav>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
