import React, { memo } from 'react';
import Link from 'next/link';
import { Row, Container, Button, Col, CardDeck, Card } from 'reactstrap';
import Loader from '../../layout/Loader';

const HomePage = memo(props => {
  return (
    <>
      <div className="hero-start">
        <h4>Welcome to Proven Solutions NLP Engine!</h4>
        <Container>
          <div className="lead my-5">
            <Row className="text-center mx-auto my-5">
              <Col className="my-3">
                <i className="fas fa-file-code fa-8x text-primary"></i>
              </Col>
              <Col className="my-3">
                <i className="fas fa-database fa-8x text-info"></i>
              </Col>
              <Col className="my-3">
                <i className="fas fa-chart-bar fa-8x text-success"></i>
              </Col>
            </Row>
          </div>
          <CardDeck>
            <Card color="dark">
              <Col lg="12">
                <Link href="/page/documentation">
                  <a href="/page/documentation" className="text-light">
                    <h4>
                      Out of the Box Templates{' '}
                      <i className="fas fa-chevron-right align-self-center"></i>
                    </h4>
                    <p>
                      Find other example boilerplates to get started with quick
                      development.
                    </p>
                  </a>
                </Link>
              </Col>
            </Card>
            <Card color="dark">
              <Col lg="12">
                <Link href="/page/documentation">
                  <a href="/page/documentation" className="text-light">
                    <h4>
                      Bring your own data{' '}
                      <i className="fas fa-chevron-right"></i>
                    </h4>
                    <p>Bring your own data into the engine and get started.</p>
                  </a>
                </Link>
              </Col>
            </Card>
            <Card color="dark">
              <Col lg="12">
                <Link href="/page/documentation">
                  <a href="/page/documentation" className="text-light">
                    <h4>
                      Analyze your data <i className="fas fa-chevron-right"></i>
                    </h4>
                    <p>Analyze user related and machine learning metrics.</p>
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

export default HomePage;
