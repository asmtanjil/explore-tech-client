import React from 'react';
import { Container } from 'react-bootstrap';

const Join = () => {
  return (
    <Container className='bg-light py-5'>
      <h2 className='fs-1 py-5 text-center text-uppercase fw-bold'>Join Us</h2>
      <div
        className="container bg-primary rounded text-white my-5 d-flex flex-column flex-lg-row align-items-center justify-content-evenly py-5"
        id="register">
        <div className="px-5 text-center text-lg-start">
          <h1>Ready to join?</h1>
          <p className="text-wrap">Wanna learn latest technology from our world class instractor? Submit you e-mail
            and <br /> set
            a strong
            password. Hurry up! Don't miss the chance.</p>
        </div>
        <div className="px-5">

          <button type="button" className="btn bg-white text-primary" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            Register Now
          </button>


          <div className="modal fade text-muted" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Submit you info</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"
                      placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword"
                      placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Join;