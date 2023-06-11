import React from 'react';
import './Home.css';
import { Container, } from 'react-bootstrap';
import AboutUs from './AboutUs';
import Albums from './Albums';
import Banner from './Banner';
import Web from './Web';
import Programming from './Programming';
import Faq from './Faq';
import Join from './Join';
import Privacy from './Privacy';
import Terms from './Terms';
import Why from './Why';

// import { useState } from 'react';
// import { useEffect } from 'react';


const Home = () => {
  // const [categories, setCategories] = useState([])

  // //Data Loaded For Course Name in LeftSide Bar
  // useEffect(() => {
  //   fetch('https://explore-tech-server.vercel.app/course-title')
  //     .then(res => res.json())
  //     .then(data => setCategories(data))
  // }, [])


  return (
    <div className='container-fluid body'>
      <Banner></Banner>
      <Container className='bg-primary p-5'>
        <h2 className='fs-1 py-3 text-center text-uppercase fw-bold'>What Exactly is Web Development?</h2>
        <p className=' text-justify'>
          Web development is closely related to the job of designing the features and functionality of websites and apps (often called “web design”), but the “web development” term is usually reserved for the actual construction and programming of websites and apps.

          Think of all the web pages you have used over the years – Web Developers built those sites, making sure they functioned properly and performed in ways that allowed for a great user experience. Web Developers do this by writing lines of code, using a variety of programming languages, which vary depending on the tasks they are performing and the platforms they are working on.

          Explore Tech has given me the opportunity to learn under various tech professionals and gain the foundations that will help me build toward my passion. TXT has helped me do a lot of searching to understand what I value professionally and personally so I can pursue the best education possible. In a direct way, Oscar and staff have helped me write my essays, determine options for colleges, and advocated for me in recommendations. I have been involved with TXT for 4 years and have connected brothers on a level that is immeasurable. I know that I can rely on my brothers in the alumni network to provide opportunities of jobs or projects and to help project us into a success that we can bring back to the community. As I move on and attend the Iovine and Young Academy at USC, I know that I am equipped to succeed thanks to TXT.
        </p>
      </Container>
      <Web></Web>
      <Programming></Programming>
      <Albums></Albums>
      <AboutUs></AboutUs>
      <Faq></Faq>
      <Why></Why>
      <Join></Join>
      <Terms></Terms>
      <Privacy></Privacy>
    </div>
  );
};

export default Home;