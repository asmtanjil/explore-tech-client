import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
    <Row>
      <Col lg={3}>

      </Col>
      <Col lg={6}>
        <Form className='container'>

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

          <Button variant="primary" type="submit">Login</Button>
        </Form>
      </Col>
      <Col lg={3}>

      </Col>
    </Row>
  );
};

export default Login;