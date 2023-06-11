import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Faq = () => {
  return (
    <Container className='bg-light p-5'>
      <h2 className='fs-1 py-5 text-center text-uppercase fw-bold'>Frequently asked questions</h2>

      <Accordion defaultActiveKey="0">

        <Accordion.Item eventKey="0">
          <Accordion.Header className='fw-semibold'>What motivational strategy could you apply with an employee who is capable but under performing?</Accordion.Header>
          <Accordion.Body>
            The tactics that encourage people to participate in achievement behavior and attitude is called motivational strategy. Even though human activity has become so complicated, there seem to be numerous ways to encourage it; in fact, almost every impact an individual comes to have the possibility of influencing their behavior patterns. The tactics that encourage people to participate in achievement behavior and attitude is called motivational strategy. Even though human activity has become so complicated, there seem to be numerous ways to encourage it; in fact, almost every impact an individual comes to have the possibility of influencing their behavior patterns.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header className='fw-semibold'>What is a Domain?</Accordion.Header>
          <Accordion.Body>
            What is domain? Specific to the internet, the term domain can refer to how the internet is structured, and domain also refers to how an organization's network resources are organized. In general, a domain is an area of control or a sphere of knowledge. What is domain? Specific to the internet, the term domain can refer to how the internet is structured, and domain also refers to how an organization's network resources are organized. In general, a domain is an area of control or a sphere of knowledge.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header className='fw-semibold'>What is the meaning of web development?</Accordion.Header>
          <Accordion.Body>
            Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.

            Among Web professionals, "Web development" usually refers to the main non-design aspects of building Web sites: writing markup and coding. Web development may use content management systems (CMS) to make content changes easier and available with basic technical skills.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header className='fw-semibold'>Can I learn web development on my own?</Accordion.Header>
          <Accordion.Body>
            Web design can be quite complex and daunting, but with the development of the Internet and technology, web design can be easier than ever before nowadays. There are many resources on the Internet, and everyone can learn to be a great web designer on their own. Web design can be quite complex and daunting, but with the development of the Internet and technology, web design can be easier than ever before nowadays. There are many resources on the Internet, and everyone can learn to be a great web designer on their own.
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </Container>
  );
};

export default Faq;