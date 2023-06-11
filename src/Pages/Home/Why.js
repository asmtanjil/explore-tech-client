import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Why = () => {
  return (
    <Container className='bg-dark py-5 text-white'>
      <h2 className='fs-1 py-5 text-center text-uppercase fw-bold'>Why with us?</h2>

      <Row className='d-flex justify-content-center align-items-center'>
        <Col className=''>
          <Image src="https://i.ibb.co/VCyq237/mac.jpg" className='img-fluid picture'></Image>
        </Col>
        <Col>
          <p className='text-justify px-2'>We're a team of experienced travel agents and sales agents based in Cuba, providing personalized services to groups, corporate companies, and individual travelers from all over the world since 2002. We love our country, and we want the world to experience it and get to know it the way we do. Nothing makes us happier than seeing our customers smile, hearing what a great experience they had in Cuba. We look forward to being your local host agency.</p>
        </Col>

      </Row>
    </Container>
  );
};

export default Why;