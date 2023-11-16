import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" style={{ marginLeft: '20px' }}>
      <Navbar.Brand href="#">StreetSculpt</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#">Hombre</Nav.Link>
        <Nav.Link href="#">Mujer</Nav.Link>
        <Nav.Link href="#">Niños</Nav.Link>
      </Nav>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
