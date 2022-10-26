import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assests/laptop.png'
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Image } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  //Sign out
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
          <NavLink to='/' style={{ paddingRight: 15, textDecoration: 'none', color: 'white' }}>Explore Tech</NavLink>
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
                <Image data-tip={user?.displayName} src={user?.photoURL} roundedCircle style={{ height: 40 }}></Image>
                :
                <></>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
      <ReactTooltip />
    </Navbar>

  );
};

export default Header;