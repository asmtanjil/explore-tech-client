import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Terms = () => {
  return (
    <Container className='bg-secondary text-light py-5'>
      <h2 className='fs-1 py-5 text-center text-uppercase fw-bold'>Terms & Conditions</h2>

      <Row className='d-flex justify-content-center align-items-center'>
        <Col>
          <p className='text-justify px-2'>The tour operator for your trip is World Synergy Travel SRL, tour operator license #869, issued by the Ministry of Tourism in Romania, business address: Papazoglu Dumitru St. No. 60, Sector 3, 031204, Bucharest Romania.

            Booking a tour with the aforementioned tour operator constitutes your agreement to the Terms & Conditions below.

            Please take time to read carefully the following terms and conditions for your own information and protection. It is your responsibility to ensure that you have read and understood the various terms associated with your contract before placing any bookings.


            Journey Travel & Tours, is committed to maintaining the privacy of personal information that you provide to us when using the Journey Travel & Tours web site. This Privacy Policy describes how we treat personal information received about you when you visit www.journeytours.com. We may make content or services from other web sites including our co-branded web sites available to you from links located on https://www.journeytours.com. These other web sites are not subject to this Privacy Policy. We recommend that you review the privacy policy at each such web site to determine how that site protects your privacy.</p>
        </Col>
        <Col className=''>
          <Image src="https://i.ibb.co/SPr7RkG/Terms-and-conditions.png" className='img-fluid picture'></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Terms;