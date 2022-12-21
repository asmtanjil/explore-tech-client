import React from 'react';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';


const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  //Sign In With Email And Password
  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('')
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.error(error);
        setError(error.message)
      })
  }

  //Sign In With Google
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('')
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      })
  }

  //Sign In With Github
  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('')
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      })
  }

  return (
    <Row>
      <Col lg={3}></Col>

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
          <Form.Text className="text-danger d-block mb-3">
            {error}
          </Form.Text>

          {/* <div className="d-grid gap-2">
            <Button className='me-3' variant="primary" type="submit">Login</Button>
          </div> */}
          <Button variant="primary" type="submit">Login</Button>

        </Form>

        <div className='container'>
          <Form.Text className="text-muted">
            Are you a new user? Please, <Link to='/register'>Register</Link>
          </Form.Text>
        </div>

        <div className='container my-3 d-flex flex-column gap-2'>
          <Button onClick={handleGoogleSignIn} className='me-2' variant="primary">
            <FaGoogle className='me-2'></FaGoogle>
            Login With Google
          </Button>
          <Button onClick={handleGithubSignIn} className='me-2' variant="dark">
            <FaGithub className='me-2'></FaGithub>
            Login With Github
          </Button>
        </div>

      </Col>

      <Col lg={3}> </Col>
    </Row>
  );
};

export default Login;