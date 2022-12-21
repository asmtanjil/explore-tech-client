import React from 'react';
import './Home.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


const Home = () => {
  const [categories, setCategories] = useState([])

  //Data Loaded For Course Name in LeftSide Bar
  useEffect(() => {
    fetch('https://explore-tech-server.vercel.app/course-title')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <div className='container-fluid body'>
      <Container>
        <div className='description'>
          <h4>Why Do Designers Need a Web Design Portfolio?</h4>
          <p>There are many indisputable reasons why every web designer needs a killer web design portfolio in order to put his best foot forward and get hired for the web design projects he has equipped himself to master. This is true not only for establishing his own credibility, but also for increasing his likelihood of getting hired for promising, high-caliber projects.</p>
        </div>
        <Row>
          <Col lg={2}>
            <p className='pt-4 fs-5'>A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.” “Intuitive design is how we give the user new superpowers.” “One man's crappy software is another man's full time job.” “Digital design is like painting, except the paint never dries. <br />
              <Link>Explore-Tech</Link> here to guide you with many resources</p>
          </Col>
          <Col lg={8}>
            <div className='img-container'>
              <Image src="https://i.ibb.co/4VVJn7k/lpBgI.png"></Image>
              <Image src="https://i.ibb.co/VxVDPj9/lp-1.png"></Image>
              <Image src="https://i.ibb.co/bWQwBYC/codeLife.png"></Image>
              <Image src="https://i.ibb.co/X5r5rRG/laptopBG.jpg"></Image>
              <Image src="https://i.ibb.co/ZV20Ny3/art.jpg"></Image>
              <Image src="https://i.ibb.co/N9Hgwpd/lpBgII.jpg"></Image>
            </div>
          </Col>
          <Col className='pt-4' lg={2}>
            <p className='pt-4 fs-5'>Below Given a list of our courses for you guys</p>
            {
              categories.map(c => <span key={c.id}>
                <li>{c.name}</li>
              </span>)
            }
            <p className='pt-4 fs-5'>Explore our well planned course plan for you by clicking here, <Link to="/courses">Courses</Link></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;