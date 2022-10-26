import React from 'react';
import { Card, Image } from 'react-bootstrap';
import imageForBg from '../../Assets/laptopBG.jpg'

const Home = () => {
  return (
    <Card>
      <Image src={imageForBg} style={{ marginTop: -25 }}></Image>
      <Image src={imageForBg}></Image>
    </Card>
  );
};

export default Home;