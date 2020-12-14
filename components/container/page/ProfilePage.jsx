import React, { memo } from 'react';
import { Container, Row, Col } from 'reactstrap';

const ProfilePage = memo(props => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12" id="profile">
            <Container>
              <Row>
                <Col xs="12" lg="12" className="mx-auto">
                  <div className="text-center">
                    <h1 className="font-head-base text-dark mt-5">
                      Proven Solution
                      <small className="h5 d-block">NLP Engine</small>
                    </h1>
                    <Col xs="10" md="5" className="mx-auto">
                      <img
                        src="/images/proven-logo.png"
                        className="rounded-circle img-thumbnail mt-5"
                        alt="Profile"
                      />
                    </Col>
                    <div className="text-dark mt-5">
                      <p className="lead my-4 mx-0 mx-sm-auto">
                        Proven provides consulting, advisory and a complimentary
                        number of business solutions to assist our clients in
                        entering markets, growing their organizations, and
                        succeed in their business goals.
                      </p>
                      <hr className="col-3 col-lg-3 mx-auto" />
                      <div className="my-4 mx-auto px-0 d-flex justify-content-center">
                        <a
                          href="https://www.provensolution.com"
                          className="btn btn-outline-warning btn-md btn-ghost-light shadow-md mr-1"
                        >
                          Contact US
                        </a>
                        <a
                          href="#"
                          className="btn btn-outline-warning btn-md btn-ghost-light shadow-md px-3 mr-1"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-outline-warning btn-md btn-ghost-light shadow-md px-3 mr-1"
                        >
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-outline-warning btn-md btn-ghost-light shadow-md px-3 mr-1"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="mx-auto text-center">
                      <a
                        href="#biography"
                        className="text-secondary scrollTo button-down"
                      >
                        We help you succeed
                        <div className="clearfix">
                          <span className="btn text-secondary">
                            <i className="fas fa-chevron-down up-down-pulse"></i>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>
                <div id="biography">
                  <Row className="row">
                    <Col lg="3">
                      <ul className="list-navigation">
                        <li className="list-navigation-item">
                          <a className="list-navigation-link" href="#">
                            About
                          </a>
                        </li>
                        <li className="list-navigation-item">
                          <a className="list-navigation-link" href="#">
                            Background
                          </a>
                        </li>
                        <li className="list-navigation-item">
                          <a className="list-navigation-link" href="#">
                            History
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col lg="9">
                      <h4 className="headline text-left">Who we are</h4>
                      <blockquote>
                        <p className="lead">
                          Proven provides business support solutions that enable
                          our clients to access GCC markets, grow their business
                          and succeed in finding efficiencies exporting their
                          business. We work with a multitude of businesses; big
                          multinationals, local brands, government entities and
                          SMEs, proving the same world class service no matter
                          their industry or size. We are the leading outsource
                          business services provider in the region and our
                          solutions are bespoke, professional and tailored for
                          each business that we work with. By combining
                          consulting, expert advice and local knowledge with our
                          in house solutions, we are able to maximize results
                          for our clients.
                        </p>
                      </blockquote>

                      <br />
                      <h4 className="headline text-left">What we do</h4>
                      <blockquote>
                        <p className="lead">
                          We provide for a number of key business areas- Saudi
                          business visa, HR , payroll, outsourcing, corporate
                          immigration, recruitment, accounting, shared services
                          and government relations.We offer a spectrum of
                          services; from market testing, entering the Saudi
                          market to supporting you to achieve your objectives.
                        </p>
                      </blockquote>
                    </Col>
                  </Row>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
});

export default ProfilePage;
