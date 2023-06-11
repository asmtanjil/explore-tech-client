import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Web = () => {
  return (
    <Container className='bg-light p-5'>
      <h2 className='fs-1 py-5 text-center text-uppercase fw-bold'>Web Development vs. Web Design</h2>
      <p className='text-center'>Though there is overlap, there are also key differences between web development and web design. Let’s take a closer look:</p>
      <Row>
        <Col>
          <h4 className='fw-semibold'>Web Designers:</h4>
          <ol>
            <li>Create everything a user sees on a website or software product, including all visual, color, typography, and usability elements</li>
            <li>Work directly with a client to create designs or work as part of a team to develop client vision</li>
            <li>May need knowledge of a programming language or some coding skills, or at least some level of familiarity with widely used languages such as HTML, CSS, PHP, and JavaScript</li>
            <li>Create wireframes and prototypes to test design ideas, offer input on design logos, branding, company style guides</li>
          </ol>
        </Col>

        <Col>
          <h4 className='fw-semibold'>Web Developers:</h4>
          <ol>
            <li>Write the code that makes a website function, whether they work on the front end or back end (server-side)</li>
            <li>Create or implement designs demanded by a client or created by a design team</li>
            <li>Need expert-level knowledge of a variety of programming languages, including HTML (HyperText Markup Language), CSS, PHP, and JavaScript but also extending to other languages (Ruby, C/C++, Python), frameworks, and libraries</li>
            <li>Rarely create mockups, select typography, or pick color palettes</li>
          </ol>
        </Col>
      </Row>
    </Container>
  );
};

export default Web;