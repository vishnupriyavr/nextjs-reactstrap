import React, { memo } from 'react';
import Link from 'next/link';
import { Row, Container, Button, Col, CardDeck, Card } from 'reactstrap';
import Loader from '../../layout/Loader';

const GetStarted = memo(props => {
  return (
    <>
      <div className="hero-start">
        <h3 className="title">Welcome to Proven Solutions NLP Engine!</h3>
        <Container>
          <div className="lead my-5">
            <Row className="text-center mx-auto my-5">
              <Col className="my-3">
                <i className="fab fa-bootstrap fa-8x text-primary"></i>
              </Col>
              <Col className="my-3">
                <i className="fab fa-database fa-8x text-danger"></i>
              </Col>
              <Col className="my-3">
                <i className="fab fa-bar-chart fa-8x text-info"></i>
              </Col>
            </Row>
            <h4>Features</h4>
            <ul>
              <li>Choose from predefined templates.</li>
              <li>Bring Your Own Data.</li>
              <li>Understandable Metrics</li>
            </ul>
          </div>
          <CardDeck>
            <Card color="dark">
              <Col lg="12">
                <Link href="/page/documentation">
                  <a href="/page/documentation" className="text-light">
                    <h3>
                      Documentation{' '}
                      <i className="fas fa-chevron-right align-self-center"></i>
                    </h3>
                    <p>
                      Learn more about Proven Solution NLP Engine in the
                      documentation.
                    </p>
                  </a>
                </Link>
              </Col>
            </Card>
            <Card color="dark">
              <Col lg="12">
                <Link href="/page/documentation">
                  <a href="/page/documentation" className="text-light">
                    <h3>
                      NLP Engine Learn <i className="fas fa-chevron-right"></i>
                    </h3>
                    <p>
                      Learn about NLP Engine by following an interactive
                      tutorial!
                    </p>
                  </a>
                </Link>
              </Col>
            </Card>
            <Card color="dark">
              <Col lg="12">
                <Link href="/page/documentation">
                  <a href="/page/documentation" className="text-light">
                    <h3>
                      Example Templates <i className="fas fa-chevron-right"></i>
                    </h3>
                    <p>
                      Find other example boilerplates to get started with quick
                      development.
                    </p>
                  </a>
                </Link>
              </Col>
            </Card>
          </CardDeck>
        </Container>
      </div>
    </>
  );
});

export default GetStarted;
