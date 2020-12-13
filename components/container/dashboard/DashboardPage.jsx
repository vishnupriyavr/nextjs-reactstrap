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
                    234 <CardText>Real Time</CardText>
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
                Followers
              </CardTitle>
              {/* <CardText> */}
              <Row className="mb-2">
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-facebook"></i> 1290
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-twitter"></i> 2324
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-instagram"></i> 12341
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-linkedin"></i> 1331
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-pinterest"></i> 4124
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-github"></i> 13411
                  </CardText>
                </Col>
              </Row>
              {/* </CardText> */}
              {/* <CardFooter>
                <Row>
                  <a href="#" className="float-right">Add new</a>
                </Row>
              </CardFooter> */}
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Messages
              </CardTitle>
              <Row>
                <Media>
                  <Media left href="#" className="col-4">
                    <Media
                      className="img-thumbnail img-fluid"
                      src="/images/profile6.jpg"
                      alt="Avatar"
                    />
                  </Media>
                  <Media body className="col-8 pl-0">
                    <Media heading tag="h5">
                      Micah Immanuel
                    </Media>
                    <CardText tag="small">
                      Hi, I already sent you the design to your email.
                      {/* <span className="text-muted small float-right">
                        2 hour ago
                      </span> */}
                    </CardText>
                  </Media>
                </Media>
              </Row>
              <Button outline size="sm" color="primary" className="float-right">
                See all messages
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
