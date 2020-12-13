import React, { memo } from 'react';
import { useState } from 'react';
import {
  Row,
  Col,
  Form,
  FormRow,
  FormGroup,
  Label,
  Input,
  Popover,
  PopoverBody,
  PopoverHeader,
  FormText,
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  UncontrolledButtonDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import SecondDataCatalog from './SecondDataCatalog';

const ButtonsPage = memo(props => {
  const {
    /* dropdowns */
    isOpen,
    stateDropUp,
    setStateDropUp,
    stateDropLeft,
    setStateDropLeft,
    stateDropRight,
    setStateDropRight,
    stateDropRightAlign,
    setStateDropRightAlign,
    toggle,
  } = props;

  const styles = {
    iframe: {
      width: '100',
      height: '90',
      border: '0',
    },
  };

  const [isFirstDataDone, setIsFirstDataDone] = useState(false);
  const toggleFirstData = e => setIsFirstDataDone(e);

  return (
    <>
      <h3>Bring Your Own Data</h3>

      <Row>
        <Col sm="12">
          <div className="p-3 align-items-center text-white-50 bg-gradient-primary box-shadow">
            <h5>Share your data needs</h5>
            <div className="bg-white p-3 text-secondary mx-auto">
              <Form className="form-horizontal" action="" method="GET">
                <div className="form-row">
                  <Col sm="2">
                    <span className="text-black font-weight-bold">
                      Amount of Data
                    </span>
                    <div className="form-check">
                      <Input
                        type="radio"
                        name="maintenanceMode"
                        id="maintenanceModeYes"
                        className="form-check-input"
                        value="1"
                      />
                      <Label
                        className="form-check-label"
                        for="maintenanceModeYes"
                      >
                        High
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        name="maintenanceMode"
                        id="maintenanceModeNo"
                        className="form-check-input"
                        value="0"
                      />
                      <Label
                        className="form-check-label"
                        for="maintenanceModeNo"
                      >
                        Low
                      </Label>
                    </div>
                  </Col>
                  <Col sm="2">
                    <span className="text-black font-weight-bold">
                      Accuracy Desired
                    </span>
                    <div className="form-check">
                      <Input
                        type="radio"
                        name="comments"
                        id="disableCommentYes"
                        className="form-check-input"
                        value="1"
                      />
                      <Label
                        className="form-check-label"
                        for="disableCommentYes"
                      >
                        High
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        name="comments"
                        id="disableCommentNo"
                        className="form-check-input"
                        value="0"
                      />
                      <Label
                        className="form-check-label"
                        for="disableCommentNo"
                      >
                        Low
                      </Label>
                    </div>
                  </Col>
                  <Col sm="2">
                    <Label className="font-weight-bold">Language</Label>
                    <div className="form-check">
                      <Input
                        type="radio"
                        name="commentModerate"
                        id="commentModerationOne"
                        className="form-check-input"
                        value="1"
                      />
                      <Label
                        className="form-check-label"
                        for="commentModerationOne"
                      >
                        English
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        name="commentModerate"
                        id="commentModerationTwo"
                        className="form-check-input"
                        value="0"
                      />
                      <Label
                        className="form-check-label"
                        for="commentModerationTwo"
                      >
                        Arabic
                      </Label>
                    </div>
                  </Col>
                  <Col sm="6">
                    <Label className="font-weight-bold">
                      Do you want to choose from the models that we have?{' '}
                    </Label>
                    <div className="form-check">
                      <Input
                        type="radio"
                        name="postFormat"
                        id="postFormatOne"
                        className="form-check-input"
                        value="1"
                      />
                      <Label className="form-check-label" for="postFormatOne">
                        Yes
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        name="postFormat"
                        id="postFormatTwo"
                        className="form-check-input"
                        value="0"
                      />
                      <Label className="form-check-label" for="postFormatTwo">
                        No
                      </Label>
                    </div>
                  </Col>
                </div>
                <div className="form-row mt-3">
                  <Col sm="12" className="text-right mt-1">
                    <Button
                      name="proceed"
                      className="btn btn-md btn-primary"
                      onClick={() => {
                        toggleFirstData(true);
                      }}
                    >
                      <i className="fas fa-check"></i> Proceed
                    </Button>
                  </Col>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
      {isFirstDataDone ? <SecondDataCatalog /> : null}
    </>
  );
});

export default ButtonsPage;
