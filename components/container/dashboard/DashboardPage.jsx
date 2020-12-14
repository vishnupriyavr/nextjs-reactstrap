import React, { memo } from 'react';
import { useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Table,
  Media,
  Row,
  Col,
  Button,
  Badge,
} from 'reactstrap';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Form, FormRow, FormGroup, Label, Input, FormText } from 'reactstrap';

import Tab from '../page/Tab';

const DashboardPage = memo(props => {
  const { isOpen, toggle } = props;

  return (
    <>
      <h4>User Metrics</h4>

      <Row>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Visitors
              </CardTitle>
              {/* <CardText> */}
              <Row className="mb-2">
                <Col
                  xs="4"
                  className="d-inline align-items-center text-success"
                >
                  <i className="fas fa-users fa-3x"></i>{' '}
                  <span>
                    129 <CardText>Users</CardText>
                  </span>
                </Col>
                <Col xs="4" className="d-inline align-items-center text-info">
                  <i className="fas fa-cog fa-3x"></i>{' '}
                  <span>
                    1930 <CardText>Sessions</CardText>
                  </span>
                </Col>
                <Col
                  xs="4"
                  className="d-inline align-items-center text-primary"
                >
                  <i className="fas fa-clock fa-3x"></i>{' '}
                  <span>
                    34 mins <CardText>Average Time Spent</CardText>
                  </span>
                </Col>
              </Row>
              {/* </CardText> */}
              {/* <CardFooter> */}
              <Button color="danger" size="md" block>
                <i className="fas fa-chart-bar"></i> statistic
              </Button>
              {/* </CardFooter> */}
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Conversation Identification
              </CardTitle>
              <Row className="mb-2">
                <Col
                  xs="4"
                  className="d-inline align-items-center text-success"
                >
                  <i className="fas fa-user-check fa-3x"></i>{' '}
                  <span>
                    1930 <CardText>Accurate</CardText>
                  </span>
                </Col>
                <Col xs="4" className="d-inline align-items-center text-info">
                  <i className="fas fa-user-times fa-3x"></i>{' '}
                  <span>
                    20 <CardText>Fallback</CardText>
                  </span>
                </Col>

                <Col
                  xs="4"
                  className="d-inline align-items-center text-primary"
                >
                  <i className="fas fa-user-minus fa-3x"></i>{' '}
                  <span>
                    234 <CardText>Stale(Left in the middle)</CardText>
                  </span>
                </Col>
              </Row>
              {/* </CardText> */}
              {/* <CardFooter>
                <Row>
                  <a href="#" className="float-right">Add new</a>
                </Row>
              </CardFooter> */}
              <Button color="danger" size="md" block>
                <i className="fas fa-chart-bar"></i> statistic
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                ML Metrics Summary
              </CardTitle>
              <Row className="mb-2">
                <Col
                  xs="4"
                  className="d-inline align-items-center text-success"
                >
                  <i className="fas fa-bullseye fa-3x"></i>{' '}
                  <span>
                    80 <CardText>Accuracy</CardText>
                  </span>
                </Col>
                <Col xs="4" className="d-inline align-items-center text-info">
                  <i className="fas fa-cog fa-3x"></i>{' '}
                  <span>
                    80 <CardText>Precision</CardText>
                  </span>
                </Col>
                <Col
                  xs="4"
                  className="d-inline align-items-center text-primary"
                >
                  <i className="fas fa-calculator fa-3x"></i>{' '}
                  <span>
                    80 <CardText>F1 Score</CardText>
                  </span>
                </Col>
              </Row>
              &nbsp;&nbsp;
              <Button color="danger" size="md" block>
                <i className="fas fa-chart-bar"></i> statistic
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="8" className="mb-4">
          <Card
            body
            inverse
            style={{ backgroundColor: '#333', borderColor: '#333' }}
            className="h-100 mb-2"
          >
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                NLP Metrics
              </CardTitle>

              {/* <CardText> */}
              <Row className="mb-2">
                <Tab />
              </Row>
              {/* </CardText> */}
              {/* <CardFooter> */}

              {/* </CardFooter> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
});

export default DashboardPage;
