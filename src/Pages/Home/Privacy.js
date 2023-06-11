import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Privacy = () => {
  return (
    <Container className='bg-info py-5'>
      <h2 className='fs-1 py-5 text-center text-uppercase fw-bold'>Privacy Policy</h2>

      <Row className='d-flex justify-content-center align-items-center'>
        <Col className=''>
          <Image src="https://i.ibb.co/GVVQmVn/privacy.jpg" className='img-fluid picture'></Image>
        </Col>

        <Col>
          <p className='text-justify px-2'>
            While information is the cornerstone of our ability to provide superior service, our most important asset is our clients’ trust. Keeping client information secure, and using it only as our clients would want us to, is a top priority for all of us at Journey Travel & Tours. Here then, is our promise to our individual customers:
            <ul className='list-disc px-4'>
              <li>We will safeguard, according to strict standards of security and confidentiality, any information our customers share with us.</li>
              <li>We will limit the collection and use of customer information to the minimum we require to deliver superior service to our customers, which includes advising our customers about our products, services and other opportunities, and to administer our business.</li>
              <li>We will permit only authorized employees, who are trained in the proper handling of customer information, to have access to that information. Employees who violate our Privacy Promise will be subject to our normal disciplinary process.</li>
              <li>We will not reveal customer information to any external organization unless we have previously informed the customer in disclosures or agreements, or are required by law.</li>
              <li>We will always maintain control over the confidentiality of our customer information. We may, however, share customer information with reputable companies when a customer has expressed an interest in their service or product. Please note that this Privacy Policy does not apply to these other companys use of customer information.</li>
              <li>Whenever we hire other organizations to provide support services, we will require them to conform to our privacy standards and to allow us to audit them for compliance.</li>
              <li>We will attempt to keep customer files complete, up-to-date, and accurate. We will tell our customers how and where to conveniently access their information (except when we’re prohibited by law) and how to notify us about errors which we will promptly correct.</li>
            </ul>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Privacy;