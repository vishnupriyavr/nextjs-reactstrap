import React, { useState } from 'react';
import {
  CardBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';

const Example = props => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            Data Classification Overview
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            Playground
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col md="6" lg="12" className="mb-4">
              <iframe
                src="http://34.123.33.69:8503/"
                title="Data Classification Overview iframe"
                width="1100"
                height="500"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <iframe
                src="http://34.123.33.69:8504/"
                title="Playground"
                width="1100"
                height="500"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Col>
          </Row>
        </TabPane>
      </TabContent>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <h5>NLP Clustering</h5>
              <iframe
                src="https://8501-ead87689-a21a-4d93-9b75-7a084809c021.ws-us03.gitpod.io/"
                title="NLP Clustering iframe"
                width="1000"
                height="500"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Example;
