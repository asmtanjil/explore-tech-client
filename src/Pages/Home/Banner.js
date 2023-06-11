import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Container } from 'react-bootstrap';

const Banner = () => {
  return (
    <Container className='bg-light p-5'>
      <h2 className='fs-1 py-3 text-center text-uppercase fw-bold'>Explore Technology</h2>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/pX5Ph0g/sta-je-html.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Hypertext Markup Language</h3>
            <p>HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/kqypFnS/creative-css3-tutorials.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Cascading Style Sheet</h3>
            <p>CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/3p5gTMZ/Free-Courses-to-learn-Java-Script.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>JavaScript</h3>
            <p>
              avaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;