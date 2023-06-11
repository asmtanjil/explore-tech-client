import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Albums = () => {
  return (
    <Container className='bg-light p-5'>
      <Row>

        {/* <Col lg={4} className="bg-light">
  <div>
    <p className='pt-4 fs-5 textJustify'>A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.” “Intuitive design is how we give the user new superpowers.” “One man's crappy software is another man's full time job.” “Digital design is like painting, except the paint never dries. This is true not only for establishing his own credibility, but also for increasing his likelihood of getting hired for promising, high-caliber projects. <br />
      <Link>Explore-Tech</Link> here to guide you with many resources</p>
  </div>

  <div>
    <p className='pt-4 fs-5'>Below Given a list of our courses for you guys</p>
    {
      categories.map(c => <span key={c.id}>
        <li>{c.name}</li>
      </span>)
    }
    <p className='pt-4 fs-5'>Explore our well planned course plan for you by clicking here, <Link to="/courses">Courses</Link></p>
  </div>
</Col> */}

        <Col lg={12}>
          <h2 className='fs-1 py-5 text-center text-uppercase fw-bold'>Albums</h2>
          <div className='img-container'>
            <Image src="https://i.ibb.co/4VVJn7k/lpBgI.png"></Image>
            <Image src="https://i.ibb.co/VxVDPj9/lp-1.png"></Image>
            <Image src="https://i.ibb.co/bWQwBYC/codeLife.png"></Image>
            <Image src="https://i.ibb.co/VxVDPj9/lp-1.png"></Image>
            <Image src="https://i.ibb.co/ZV20Ny3/art.jpg"></Image>
            <Image src="https://i.ibb.co/N9Hgwpd/lpBgII.jpg"></Image>
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default Albums;