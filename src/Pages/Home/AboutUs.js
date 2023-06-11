import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className='bg-info py-5'>
      <h2 className='fs-1 py-5 text-center text-uppercase fw-bold'>About Company</h2>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col>
          <p className='text-justify px-4'>Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management. Web development is closely related to the job of designing the features and functionality of apps (web design). The term development is usually reserved for the actual construction of these things (that is to say, the programming of sites).

            The basic tools involved in web development are programming languages called HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript. There are, however, a number of other programs used to “manage” or facilitate the construction of sites that would otherwise have to be done “from scratch” by writing code. A number of content management systems (CMS) fall into this category, including WordPress, Joomla!, Drupal, TYPO3, and Adobe Experience Manager, among others.</p>
        </Col>

        <Col className=''>
          <Image src="https://i.ibb.co/2MbyH7t/imac.jpg" className='img-fluid picture'></Image>
        </Col>

      </Row>
    </Container>
  );
};

export default AboutUs;