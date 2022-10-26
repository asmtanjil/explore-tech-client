import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; import './CardDetails.css'

const CardDetails = () => {
  const allDetails = useLoaderData()
  const { title, details, image, author } = allDetails;
  return (
    <div className='my-4'>
      <Container>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <Card className="text-center">
              <Card.Header>

                <div className='author'>
                  <Image roundedCircle src={author.img} style={{ height: 40 }}></Image>
                  <div className='author-detail'>
                    <p>@ <span className='fw-bold'>{author.name}</span></p>
                    <p>Released: {author.published_date}</p>
                  </div>
                </div>

              </Card.Header>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image} />
                <Card.Text>
                  {details}
                </Card.Text>
                <Button variant="primary">Get Premium ACcess</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardDetails;