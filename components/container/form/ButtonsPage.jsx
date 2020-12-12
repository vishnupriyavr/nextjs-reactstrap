import React, { memo } from 'react';
import {
    Row,
    Col,
    Form,
    FormRow,
  FormGroup,
  Label,
  Input,
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

  return (
    <>
      <h3>Bring Your Own Data</h3>
    
          <Row>
            <Col sm="12">
              <div className="p-3 align-items-center text-white-50 bg-gradient-primary box-shadow">
                <h5>BYOD - Structured Data</h5>
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
                        <Label className="font-weight-bold">Do you want to choose from the models that we have? </Label>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="postFormat"
                            id="postFormatOne"
                            className="form-check-input"
                            value="1"
                          />
                          <Label
                            className="form-check-label"
                            for="postFormatOne"
                          >
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
                          <Label
                            className="form-check-label"
                            for="postFormatTwo"
                          >
                           No
                          </Label>
                        </div>
                        
                      </Col>
                    </div>
                    <div className="form-row mt-3">
                      <Col sm="6">
                        <Label for="maintenanceModeText">
                          Maintenance Message
                        </Label>
                        <Input
                          type="textarea"
                          id="maintenanceModeText"
                          name="maintenanceModeText"
                          className="form-control"
                          placeholder="Your status"
                          defaultValue="We are in maintenance mode, sorry for the convinience!"
                        />
                      </Col>
                      <Col sm="6">
                        <Label for="statusText">Status</Label>
                        <Input
                          type="textarea"
                          id="statusText"
                          name="statusText"
                          className="form-control"
                          placeholder="Your status"
                          defaultValue="Hi, John Doe was here!"
                        />
                      </Col>
                    </div>
                    <div className="form-row mt-3">
                      <Col sm="12" className="text-right mt-1">
                        <Button
                          type="submit"
                          name="submit"
                          className="btn btn-md btn-primary"
                        >
                          <i className="fas fa-check"></i> Save
                        </Button>
                      </Col>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>


          <Row>
            <Col sm="12">
              <div className="p-3 align-items-center text-white-50 bg-gradient-primary box-shadow">
                <h5>BYOD - Unstructured Data</h5>
                <div className="bg-white p-3 text-secondary mx-auto">
                  <Form className="form-horizontal" action="" method="GET">
                    <div className="form-row">
                      <Col sm="7">
                        <span className="text-black font-weight-bold">
                         Please provide your data in any of the formats as below:
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
                            Excel
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
                            csv(comma seperated file)
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
                            txt(text file with entries)
                          </Label>
                        </div>
                        </Col>
                      
                      
                      
                    </div>
                    <div className="form-row mt-3">
                      <Col sm="6">
                        <Label for="maintenanceModeText">
                          Maintenance Message
                        </Label>
                        <Input
                          type="textarea"
                          id="maintenanceModeText"
                          name="maintenanceModeText"
                          className="form-control"
                          placeholder="Your status"
                          defaultValue="We are in maintenance mode, sorry for the convinience!"
                        />
                      </Col>
                      <Col sm="6">
                        <Label for="statusText">Status</Label>
                        <Input
                          type="textarea"
                          id="statusText"
                          name="statusText"
                          className="form-control"
                          placeholder="Your status"
                          defaultValue="Hi, John Doe was here!"
                        />
                      </Col>
                    </div>
                    <div className="form-row mt-3">
                      <Col sm="12" className="text-right mt-1">
                        <Button
                          type="submit"
                          name="submit"
                          className="btn btn-md btn-primary"
                        >
                          <i className="fas fa-check"></i> Upload Your Data
                        </Button>
                      </Col>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>

        
      
    </>
  );
});

export default ButtonsPage;
