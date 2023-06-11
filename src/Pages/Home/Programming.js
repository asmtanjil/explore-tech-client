import React from 'react';
import { Container } from 'react-bootstrap';

const Programming = () => {
  return (
    <Container>
      <Container className='bg-info p-5'>
        <h2 className='fs-1 py-5 text-center text-uppercase fw-bold'>What is Front-End Development?</h2>
        <p>Front-end development involves the “client-facing” side of web development. That is to say usually, front-end web development refers to the portion of the site, app, or digital product that users will see and interact with. A Front-End Developer, therefore, is responsible for the way a digital product looks and “feels,” which is why they are often also referred to as Web Designers.

          Front-End Web Developers focus on translating website design and visual ideas into code. A front-end Software Developer takes the design ideas created by others on web development teams and programs them into reality, acting as a bridge between design and technology.

          Front-End Developers will usually need to possess a solid understanding of programming languages, including HTML, CSS, and JavaScript, as well as frameworks like React, Bootstrap, Backbone, AngularJS, and EmberJS. Responsibilities of a Front-End Developer would include creating responsive websites (that look and function well on any device), conducting website testing and fixing any bugs detected along the web development process, and ensuring site structure follows SEO best practices.</p>
      </Container>



      <Container className='bg-success p-5 text-white'>
        <h2 className='fs-1 py-5 text-center text-uppercase fw-bold'>What is Back-End Development?</h2>
        <p>If Front-End Developers are responsible for how a digital product looks, Back-End Developers are focused on how it works. A Back-End Developer creates the basic framework of a website before maintaining it and ensuring it performs the way it should, including database interactions, user authentication, server, network and hosting configuration, and business logic. Working behind the scenes – or server-side – Back End Developers are concerned with the systems and structures that allow computer applications to perform as desired.

          The primary responsibility of Back-End Developers is to ensure the functionality of the site, including its responsiveness and speed. To do that, Back-End Developers have to know how to build servers with modern frameworks (while developing custom APIs and serving static websites and files), and how to manage databases and data on a web server.

          Typically, Back-End Developers use server-side programming languages, including PHP, Ruby, and Python, as well as tools including MySQL, Oracle, and Git.</p>
      </Container>



      <Container className='bg-warning p-5'>
        <h2 className='fs-1 py-5 text-center text-uppercase fw-bold'>What Is a Full-Stack Developer?</h2>
        <p>A Full-Stack Developer is someone familiar with both front- and back-end development. Full Stack Developers usually understand a wide variety of programming languages and because of their versatility, they might be given more of a leadership role on projects than developers who specialize. They are generalists, adept at wearing both hats, and familiar with every layer of development. Obviously, employers want to hire Full-Stack Developers – according to an Indeed study, they are the fourth-most in-demand job in tech.

          If the title is contentious, it’s in the generalist nature of the position. Developers who specialize in the front-end or back-end often bristle at the notion that someone could be equally adept at both – the expression “jack-of-all-trades, master of none” comes to mind.

          “My defensive tendencies are normally put on high alert when I hear that magic phrase (‘full-stack’),” wrote Front-End Developer Andy Shora. “Stacks are a lot bigger than what they used to be, and being able to claim one has acquired refined skills at every layer of web development is certainly not a small claim. Does this mean you have a broad range of skills or you specialize in everything?”

          While that perception persists, there still is an increasing number of tech professionals who consider themselves Full-Stack Developers. According to a recent Stack Overflow survey of Developers, 48.2 percent consider themselves Full-Stack Developers.

          What’s unclear is whether Developers are now expected to possess a broader skillset, or if Developers are taking it upon themselves to understand functions at both the front-end and back-end. Either way, it’s becoming increasingly important for aspiring Developers to have a foundation in both.

          “For most people hoping to break into web improvement, you should center around working up an establishment in both front-end and back-end advancement first,” recommended Software Engineer and Tech Writer Muhammad Anser. “At that point, you can float towards a claim to fame later on.”

          And with demand for Developers expected to grow 15 percent by 2026 (for 24,400 new jobs), much faster than the U.S. average rate of job growth, there may not be a better time to dive in and learn more about all the layers of Web Development.</p>
      </Container>
    </Container>
  );
};

export default Programming;