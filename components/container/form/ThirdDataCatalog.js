import React, { memo } from 'react';
import { useState } from 'react';

import {
  Row,
  Col,
  Form,
  Alert,
  Button,
  PopoverHeader,
  Popover,
  PopoverBody,
  Label,
  Input,
} from 'reactstrap';

const ThirdDataCatalog = memo(props => {
  return (
    <Row>
      <Col sm="12">
        <div className="p-3 align-items-center text-white-50 bg-gradient-primary box-shadow">
          <h5>Your bot is ready!</h5>
          <div className="bg-cream p-3 text-info mx-auto">
            <Form className="form-horizontal" action="" method="GET">
              <Col sm="7">
                <Alert className="bg-gradient-warning text-white">
                  <b>
                    The KYC Bot has been created and can be embedded in your
                    site using <br />{' '}
                    <a
                      className="text-yellow"
                      href="https://provensolution.com/12345/kyc-bot"
                    >
                      https://provensolution.com/12345/kyc-bot
                    </a>
                  </b>
                </Alert>
              </Col>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
});

export default ThirdDataCatalog;
