import React from 'react';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider()

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
  }

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
  }

  return (
    <Row>
      <Col lg={3}>

      </Col>
      <Col lg={6}>
        <Form onSubmit={handleSignIn} className='container'>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter Your Email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Enter Your Password" required />
          </Form.Group>

          <Form.Text className="text-muted">
            <p><small>Are you a new user? Please, </small><Link to='/register'>Register</Link></p>
          </Form.Text>

          <Button variant="primary" type="submit">Login</Button>

          <Form.Text className="text-muted">

          </Form.Text>
        </Form>

        <div className='mt-4'>
          <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-info" size="lg">
            <FaGoogle className='me-2'></FaGoogle>
            Login With Google
          </Button>

          <br />

          <Button variant="outline-dark" size="lg">
            <FaGithub className='me-2'></FaGithub>
            Login With Github
          </Button>
        </div>
      </Col>
      <Col lg={3}>

      </Col>
    </Row>
  );
};

export default Login;