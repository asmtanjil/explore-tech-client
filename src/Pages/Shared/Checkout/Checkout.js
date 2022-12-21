import React from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const allNews = useLoaderData();
  const { title } = allNews;

  return (
    <Container>
      <Row className='container'>
        <Col lg={2}></Col>

        <Col lg={8}>
          <div>
            <h3 className='text-bold text-center fs-2 mb-4'>{title}</h3>
            <h5 className='text-semibold text-center mb-4'>Welcome <span className='fw-bold text-success'>{user?.displayName}</span><span> to our website for willing to Learn with us.</span></h5>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Your Contact Info</Form.Label>
                <Form.Control type="text" placeholder="Enter Contact Number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" />
              </Form.Group>

              <Button variant="primary" type="submit">Make Payment</Button>
            </Form>
          </div>
        </Col>

        <Col lg={2}></Col>
      </Row>
    </Container>
  );
};

export default Checkout;