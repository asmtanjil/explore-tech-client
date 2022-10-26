import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; import './CardDetails.css'
import { FaRegFilePdf } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const CardDetails = () => {
  const allDetails = useLoaderData();
  const { title, details, image, author, price, id } = allDetails;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleCheckOut = () => {
    if (user) {
      navigate(`/checkout/${id}`, { state: { title, id, price, } })
    }
    else {
      navigate('/login');
    }
  }
  return (
    <div className='my-4'>
      <Container>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <Card className="text-center">
              <Card.Header className='headerCard'>
                <div className='author'>
                  <Image roundedCircle src={author.img} style={{ height: 40 }}></Image>
                  <div className='author-detail'>
                    <p>@ <span className='fw-bold'>{author.name}</span></p>
                    <p>Released: {author.published_date}</p>
                  </div>
                </div>
                <FaRegFilePdf className='fs-3'></FaRegFilePdf>
              </Card.Header>

              <Card.Body>
                <Card.Title className='my-2'>{title}</Card.Title>
                <Image className='my-2' src={image}></Image>
                <Card.Text className='my-4'>
                  {details}
                </Card.Text>
                <Button onClick={handleCheckOut} variant="primary">Pay {price} To Get Premium Access</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardDetails;