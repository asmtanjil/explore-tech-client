import React from 'react';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);

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
      })
      .catch(error => console.error(error))

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
            <Form.Check type="checkbox" label="Check me out" />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">Register</Button>
        </Form>
      </Col>
      <Col lg={3}>

      </Col>
    </Row>
  );
};

export default Register;