import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Checkout = () => {
  const { user } = useContext(AuthContext)
  const location = useLocation();
  const { price, title } = location.state
  return (
    <div className='container'>
      <p>{title}</p>
      <h4>Welcome <span>{user?.displayName} to our Site for willing to Learn with us.</span></h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Contact Info</Form.Label>
          <Form.Control type="text" placeholder="Enter Contact Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;