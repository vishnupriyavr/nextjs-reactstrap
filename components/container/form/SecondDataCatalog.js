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
import ThirdDataCatalog from './ThirdDataCatalog';

const SecondDataCatalog = memo(props => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [needsEntityArea, setNeedsEntityArea] = useState(false);
  const [needsIntentArea, setNeedsIntentArea] = useState(false);
  const [modalToAnnotate, setModalToAnnotate] = useState(false);
  const [newEntity, setNewEntity] = useState(false);
  const [entitiesExist, setEntitiesExist] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const [isSecondDataDone, setIsSecondDataDone] = useState(false);
  const toggleSecondData = e => setIsSecondDataDone(e);

  const entitiesAdded = [];

  const togglePopOver = () => setPopoverOpen(!popoverOpen);
  const showEntityTextArea = () => setNeedsEntityArea(!needsEntityArea);

  const submitEntity = () => {
    entitiesAdded.push(newEntity);
    setEntitiesExist(true);
    console.log('entitiesAdded: ' + entitiesAdded);
    setNeedsIntentArea(!needsIntentArea);
  };

  const submitIntent = () => {
    setModalToAnnotate(!modalToAnnotate);
  };

  const modalForAnnotation = memo(props => {
    return <></>;
  });
  const annotatorUtility = memo(props => {
    return <></>;
  });

  return (
    <>
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
                        placement="right-start"
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
                          placeholder="Start Typing Special Info Entries (eg. Account  Number)"
                          defaultValue="Start Typing Special Info Entries (eg. Account  Number)"
                          onChange={e => {
                            setNewEntity(e.target.value);
                          }}
                        />
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
                </div>
                <div className="form-row mt-3">
                  {needsIntentArea ? (
                    <>
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
                      {modalToAnnotate ? (
                        <ModalToIntentAdd
                          modalToAnnotate={modalToAnnotate}
                          modalContent={modalContent}
                        />
                      ) : null}
                    </>
                  ) : null}
                </div>
                <div className="form-row mt-3">
                  <Col sm="12" className="text-right mt-1">
                    <Button
                      name="proceed"
                      className="btn btn-md btn-primary"
                      onClick={() => {
                        toggleSecondData(true);
                      }}
                    >
                      <i className="fas fa-check"></i> Let us create a bot!
                    </Button>
                  </Col>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
      {isSecondDataDone ? <ThirdDataCatalog /> : null}
    </>
  );
});

const EntitySelectionBox = memo(props => {
  const { entitiesExist, entitiesAdded } = props;
  return (
    <>
      {entitiesExist ? (
        <Input type="select" name="select" id="exampleSelect">
          {entitiesAdded.map(eachEntity => (
            <option id={eachEntity}>{eachEntity}</option>
          ))}
        </Input>
      ) : null}
    </>
  );
});
export default SecondDataCatalog;
