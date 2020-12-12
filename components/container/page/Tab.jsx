import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            More Tabs
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h5>NLP Overview Metrics</h5>
              <iframe
        src="https://8501-ead87689-a21a-4d93-9b75-7a084809c021.ws-us03.gitpod.io/"
        title="NLP Overview Metrics iframe"
        width="1000"
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
              <h5>NLP Model Metrics</h5>
              <iframe
        src="https://8501-ead87689-a21a-4d93-9b75-7a084809c021.ws-us03.gitpod.io/"
        title="NLP Overview Metrics iframe"
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
}

export default Example;