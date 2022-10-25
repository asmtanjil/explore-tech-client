import React from 'react';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  //Sign In With Email And Password
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
        form.reset();
      })
      .catch(error => console.error(error))
  }

  //Sign In With Google
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
  }

  //Sign In With Github
  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
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
          <Button variant="primary" type="submit">Login</Button>
          <Form.Text className="text-muted">

          </Form.Text>
        </Form>

        <div className='container'>
          <Form.Text className="text-muted">
            <small>Are you a new user? Please, </small><Link to='/register'>Register</Link>
          </Form.Text>
        </div>

        <div className='container mt-3'>
          <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary" size="lg">
            <FaGoogle className='me-2'></FaGoogle>
            Login With Google
          </Button>

          <br />

          <Button onClick={handleGithubSignIn} variant="outline-dark" size="lg">
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