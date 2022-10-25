import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../Assests/laptop.png'
import Button from 'react-bootstrap/Button';


const Header = () => {
  return (
    <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          <Link to='/'>Explore Tech</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Courses</Nav.Link>
            <Nav.Link href="#pricing">Blogs</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Link
              to='/register'
              style={{
                paddingRight: 15,
                textDecoration: 'none',
                color: 'lightGray'
              }}>
              Sign Up
            </Link>

            <Link
              to='/login'
              style={{
                paddingRight: 15,
                textDecoration: 'none',
                color: 'lightGray'
              }}>
              Login
            </Link>
            <Button variant="outline-light">Log Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;