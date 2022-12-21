import React from 'react';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoURL, email, password)

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('')
        form.reset();
        updateUserProfile(name, photoURL)
        toast('You have Successfully Registered', {
          icon: '👏',
        });
        navigate('/login')
      })
      .catch(error => {
        console.error(error);
        setError(error.message)
      })

  }
  return (
    <Row>
      <Col lg={3}>

      </Col>
      <Col lg={6}>
        <Form onSubmit={handleCreateUser} className='container'>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control name='name' type="text" placeholder="Enter Your Full Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name='photoURL' type="text" placeholder="Enter Your Photo URL" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter Your Email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Enter Your Password" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Text className='text-danger'>
              {error}
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">Register</Button>
        </Form>
        <div className='container'>
          <Form.Text className="text-muted">
            Already have an account? Please, <Link to='/login'>Login</Link>
          </Form.Text>
        </div>
      </Col>
      <Col lg={3}>

      </Col>
    </Row>
  );
};

export default Register;