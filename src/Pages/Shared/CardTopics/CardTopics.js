import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CardTopics.css'

const CardTopics = ({ courses }) => {
  const { title, details, image } = courses;

  return (
    <Card style={{ width: '75%' }}>
      <Card.Img variant="top" src={image} style={{ marginTop: 10, padding: 5 }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {
            details.length > 150 ?
              <>{details.slice(0, 150) + '...'} <Link>Read More</Link>
              </>
              :
              <>{details}</>
          }
        </Card.Text>
        <Link to='/'>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardTopics;