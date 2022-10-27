import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const allNews = useLoaderData();
  const { title } = allNews;

  return (
    <div className='container'>
      <h3 className='bg-success text-light p-2 '>{title}</h3>
      <h5>Welcome <span className='fw-bold'>{user?.displayName}</span><span> to our website for willing to Learn with us.</span></h5>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
  );
};

export default Checkout;