import React, { memo } from 'react';
import { useState } from 'react';

import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Popover,
  PopoverHeader,
  PopoverBody,
  Label,
  Input,
  Form,
  FormGroup,
  FormFeedback,
  FormText,
} from 'reactstrap';
import { TokenAnnotator, TextAnnotator } from 'react-text-annotate';

const ModalToIntentAdd = memo(props => {
  const { modalToAnnotate, modalContent } = props;
  const [modalToggle, setModalToggle] = useState(modalToAnnotate);
  const [popoverOpen, setPopoverOpen] = useState();
  const [annotatedText, setAnnotatedText] = useState('');
  const [annotatedTag, setAnnotatedTag] = useState('ACCOUNT_NUMBER');

  const toggleModal = () => setModalToggle(!modalToggle);
  const togglePopOver = () => setPopoverOpen(!popoverOpen);

  const TAG_COLORS = {
    ACCOUNT_NUMBER: '#00ffa2',
    LOCATION: '#84d2ff',
    CURRENCY: '#f0d405',
  };

  return (
    <Modal
      isOpen={modalToggle}
      modalTransition={{ timeout: 700 }}
      backdropTransition={{ timeout: 1300 }}
      toggle={toggleModal}
      className={'toggleModel'}
    >
      <ModalHeader toggle={toggleModal}>
        Annotate your data &nbsp;{' '}
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
          <PopoverHeader>Annotation of data</PopoverHeader>
          <PopoverBody>
            Annotation of data is the means of marking special Information on
            your data and assigning a name to the data for classifying it.
          </PopoverBody>
        </Popover>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="selectEntityToAnnotate">
              Select a Information Type
            </Label>
            <Input
              type="select"
              name="selectEntityToAnnotate"
              id="selectEntityToAnnotate"
              onChange={e => {
                setAnnotatedTag(e.target.value);
              }}
            >
              <option value="ACCOUNT_NUMBER">Account Number</option>
              <option value="LOCATION">Location</option>
              <option value="CURRENCY">Currency</option>
            </Input>

            <TokenAnnotator
              style={{
                maxWidth: 500,
                lineHeight: 1.5,
              }}
              tokens={modalContent.split(' ')}
              value={annotatedText}
              onChange={value => {
                setAnnotatedText(value);
              }}
              getSpan={span => ({
                ...span,
                tag: annotatedTag,
                color: TAG_COLORS[annotatedTag],
              })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Give it a Name</Label>
            <Input valid />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
            <FormText>Example: CHECK_ACCOUNT_BALANCE</FormText>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggleModal}>
          Done
        </Button>{' '}
        <Button color="secondary" onClick={toggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
});
export default ModalToIntentAdd;
