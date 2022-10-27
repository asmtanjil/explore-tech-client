import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/laptop.png'
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false)

  //Toggler Handler
  const handleToggler = () => {
    setToggle(!toggle)
  }

  //Sign out From Site
  const handleSignOut = () => {
    logOut()
      .then(() => { })
      .catch(() => { })
  }

  return (
    <Navbar className='mb-4' collapseOnSelect expand="lg" bg="primary" variant="primary">
      <Container>
        <Navbar.Brand>
          <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top me-2" />
          <NavLink to='/' style={{ paddingRight: 15, textDecoration: 'none', color: 'white' }}>Explore-Tech</NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand>
              <NavLink to='/courses' style={{ paddingRight: 15, textDecoration: 'none', color: 'white' }}>Courses</NavLink>
              <NavLink to='/blog' style={{ paddingRight: 15, textDecoration: 'none', color: 'white' }}>Blogs</NavLink>
              <NavLink to='/blog' style={{ paddingRight: 15, textDecoration: 'none', color: 'white' }}>FAQ</NavLink>
            </Navbar.Brand>
          </Nav>
          <Nav>
            {
              user?.uid ?
                <>
                  <Button className='me-2' onClick={handleSignOut} variant="outline-light">Log Out</Button>
                </>
                :
                <>
                  <Link to='/register' style={{ paddingRight: 15, textDecoration: 'none', color: 'white' }}>Sign Up</Link>
                  <Link to='/login' style={{ paddingRight: 15, textDecoration: 'none', color: 'white' }}>Login</Link>
                </>
            }
            {
              user?.photoURL ?
                <Image src={user?.photoURL} title={user?.displayName} roundedCircle style={{ height: 40 }}></Image>
                :
                <><FaUser></FaUser></>
            }

          </Nav>
          <Nav className='ms-2'>
            <Nav.Link onClick={handleToggler} as={Link}>
              {toggle ? (
                <Button variant="light">Light</Button>
              ) : (
                <Button variant="dark">Dark</Button>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default Header;