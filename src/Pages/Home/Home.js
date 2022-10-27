import React from 'react';
import './Home.css';
import imageI from '../../Assets/laptopBG.jpg';
import imageII from '../../Assets/art.jpg';
import imageIII from '../../Assets/codeLife.jpg';
import imageIV from '../../Assets/lp-1.jpg';
import imageV from '../../Assets/lpBgI.jpg';
import imageVI from '../../Assets/lpBgII.jpg';
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
              <Image src={imageI}></Image>
              <Image src={imageII}></Image>
              <Image src={imageIII}></Image>
              <Image src={imageIV}></Image>
              <Image src={imageV}></Image>
              <Image src={imageVI}></Image>
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