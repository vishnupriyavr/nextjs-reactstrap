import React, { memo } from 'react';
import Link from 'next/link';
import { Row, Container, Button, Col, CardDeck, Card } from 'reactstrap';
import Loader from '../../layout/Loader';

const HomePage = memo(props => {
  return (
    <>
      <div className="hero-start">
        <h4>Welcome to Proven Solutions NLP Engine</h4>
        <Container>
          <div className="lead my-5">
            <Row className="text-center mx-auto my-5">
              <Col className="my-4">
                <Card>
                  <i className="fas fa-file-code fa-6x text-primary"></i>
                </Card>
              </Col>
              <Col className="my-4">
                <Card>
                  <i className="fas fa-database fa-6x text-info"></i>
                </Card>
              </Col>
              <Col className="my-4">
                <Card>
                  <i className="fas fa-chart-bar fa-6x text-success"></i>
                </Card>
              </Col>
              <Col className="my-4">
                <Card>
                  <i className="fas fa-house-damage fa-6x text-secondary"></i>
                </Card>
              </Col>
            </Row>
          </div>
          <CardDeck>
            <Card color="dark">
              <Col lg="9">
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
              <Col lg="9">
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
              <Col lg="9">
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
            <Card color="dark">
              <Col lg="9">
                <Link href="/page/documentation">
                  <a href="/page/documentation" className="text-light">
                    <h4>
                      On-Prem-First <i className="fas fa-chevron-right"></i>
                    </h4>
                    <p>
                      Keep your data secure with the ability to host our
                      solution on-prem.
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

export default HomePage;
