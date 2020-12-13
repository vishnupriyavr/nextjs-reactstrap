import React, { memo } from 'react';
import { useState } from 'react';

import {
  Row,
  Col,
  Form,
  Button,
  PopoverHeader,
  Popover,
  PopoverBody,
  Label,
  Input,
} from 'reactstrap';

import ModalToIntentAdd from './ModalToIntentAdd';

const SecondDataCatalog = memo(props => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [needsEntityArea, setNeedsEntityArea] = useState(false);
  const [needsIntentArea, setNeedsIntentArea] = useState(false);
  const [modalToAnnotate, setModalToAnnotate] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const togglePopOver = () => setPopoverOpen(!popoverOpen);
  const showEntityTextArea = () => setNeedsEntityArea(!needsEntityArea);

  const submitEntity = () => {
    setNeedsIntentArea(!needsIntentArea);
  };

  const submitIntent = () => {
    setModalToAnnotate(!modalToAnnotate);
  };

  return (
    <Row>
      <Col sm="12">
        <div className="p-3 align-items-center text-white-50 bg-gradient-primary box-shadow">
          <h5>Upload your data</h5>
          <div className="bg-white p-3 text-secondary mx-auto">
            <Form className="form-horizontal" action="" method="GET">
              <div className="form-row">
                <Col sm="7">
                  <span className="text-black font-weight-bold">
                    Does your data have special information?&nbsp;
                    <Button
                      outline
                      color="info"
                      name="entityQandA"
                      id="entityQandA"
                      type="button"
                    >
                      <i className="fas fa-question"></i>
                    </Button>
                    <Popover
                      placement="top"
                      isOpen={popoverOpen}
                      target="entityQandA"
                      toggle={togglePopOver}
                    >
                      <PopoverHeader>Special Information</PopoverHeader>
                      <PopoverBody>
                        Special information may include details like Account
                        Number, City, Location etc that helps adding more
                        information to your data.
                      </PopoverBody>
                    </Popover>
                  </span>
                  <div className="form-check">
                    <Input
                      type="radio"
                      name="entities"
                      id="entitiesYes"
                      className="form-check-input"
                      value="1"
                      onClick={() => {
                        showEntityTextArea(true);
                        setNeedsIntentArea(false);
                      }}
                    />
                    <Label className="form-check-label" for="entitiesYes">
                      Yes
                    </Label>
                  </div>
                  <div className="form-check">
                    <Input
                      type="radio"
                      name="entities"
                      id="entitiesNo"
                      className="form-check-input"
                      value="0"
                      onClick={() => {
                        setNeedsIntentArea(true);
                      }}
                    />
                    <Label className="form-check-label" for="entitiesNo">
                      No
                    </Label>
                  </div>
                </Col>
              </div>
              <div className="form-row mt-3">
                {needsEntityArea ? (
                  <>
                    <Col sm="6">
                      <Label for="entityTextArea">
                        Provide Special Information
                      </Label>
                      <Input
                        type="textarea"
                        id="entityTextArea"
                        name="entityTextArea"
                        className="form-control"
                        placeholder="Start Typing Special Info Entries seperated by new line...."
                        defaultValue="Start Typing Special Info Entries seperated by new line...."
                      />
                    </Col>
                    <Col sm="6">
                      <Button
                        outline
                        size="sm"
                        color="success"
                        onClick={() => {
                          submitEntity();
                        }}
                      >
                        Submit Special Information
                      </Button>
                    </Col>
                  </>
                ) : null}
                {needsIntentArea ? (
                  <Row>
                    <Col sm="6">
                      <Label for="statusText">Provide Data Entries</Label>
                      <Input
                        type="textarea"
                        id="statusText"
                        name="statusText"
                        className="form-control"
                        placeholder="Your status"
                        defaultValue="Start Typing your data...."
                        onChange={e => {
                          setModalContent(e.target.value);
                        }}
                      />
                    </Col>
                    <Col sm="6">
                      <Button
                        outline
                        size="sm"
                        color="success"
                        id="submitIntent"
                        onClick={() => {
                          submitIntent();
                        }}
                      >
                        Submit Data
                      </Button>
                    </Col>
                  </Row>
                ) : null}
                {modalToAnnotate ? (
                  <ModalToIntentAdd
                    modalToAnnotate={modalToAnnotate}
                    modalContent={modalContent}
                  />
                ) : null}
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
  );
});
export default SecondDataCatalog;
