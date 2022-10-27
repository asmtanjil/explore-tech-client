import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CardTopics.css'

const CardTopics = ({ courses }) => {
  const { title, details, image, id } = courses;

  return (
    <Card className='card-body'>
      <Image className='p-2' src={image}></Image>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='textJustify'>
          {
            details.length > 250 ?
              <>{details.slice(0, 250) + '...'}</>
              :
              <>{details}</>
          }
        </Card.Text>
        <Link to={`/details/${id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardTopics;