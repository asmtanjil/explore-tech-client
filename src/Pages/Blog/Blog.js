import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
  return (
    <div className='container rounded'>

      <Card className='m-3'>
        <Card.Header className='bg-primary text-white' as="h5">Question-1 : What is CORS?</Card.Header>
        <Card.Body>
          <Card.Text className='text-dark fs-5'>
            <span className='fw-bold fs-4'>Answer: </span>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
            It is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='m-3'>
        <Card.Header className='bg-primary text-white' as="h5">Question-2 : Why are you using Firebase?</Card.Header>
        <Card.Body>
          <Card.Text className='text-dark fs-5'>
            <span className='fw-bold fs-4'>Answer: </span>
            Firebase is an app development platform that helps us build and grow apps and games users love. Backed by Google and trusted by millions of business around the world.
            The Firebase Realtime Database is a cloud-hosted NoSQL database that lets you store and sync data between your users in realtime. These are data from firebase.
            But I am on my way to be a web developer. Currently I use the feature of Authentication from firebase. It helps me to create user and keep their data secret.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='m-3'>
        <Card.Header className='bg-primary text-white' as="h5">Question-3 : How does Private-Route work?</Card.Header>
        <Card.Body>
          <Card.Text className='text-dark fs-5'>
            <span className='fw-bold fs-4'>Answer: </span>
            Private Route means protected Router what cannot be accessed by any unauthorized people. The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he/she will be redirected to the login page and the user can only access the authenticated routes If he/she is authenticated (Logged in)
            That how Private Route Works.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='m-3'>
        <Card.Header className='bg-primary text-white' as="h5">Question-4 : What is Node? How does it work?</Card.Header>
        <Card.Body>
          <Card.Text className='text-dark fs-5'>
            <span className='fw-bold fs-4'>Answer: </span>
            Node is a used as backend service where javascript works on the server-side of the application.
            This way javascript is used on both frontend and backend. NodeJS runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;