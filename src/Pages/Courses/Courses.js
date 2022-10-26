import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CardTitle from '../Shared/CardTitle/CardTitle';
import CardTopics from '../Shared/CardTopics/CardTopics';

const Courses = () => {
  const allCourse = useLoaderData();
  return (
    <Container>
      <Row>
        <Col lg={3}>
          {/* {
            allCourse.map(courses =>
              <CardTitle
                key={courses.id}
                courses={courses}
              >
              </CardTitle>)
          } */}
          <CardTitle></CardTitle>

        </Col>

        <Col className='cardTopic' lg={9}>
          {
            allCourse.map(courses => <CardTopics
              key={courses.id}
              courses={courses}
            ></CardTopics>)
          }
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;