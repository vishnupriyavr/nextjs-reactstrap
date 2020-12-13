import React, { memo } from 'react';
import { useState } from 'react';

import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalToIntentAdd = memo(props => {
  const { modalToAnnotate, modalContent } = props;
  const [modalToggle, setModalToggle] = useState(modalToAnnotate);

  const toggleModal = () => setModalToggle(!modalToggle);

  return (
    <Modal
      isOpen={modalToggle}
      modalTransition={{ timeout: 700 }}
      backdropTransition={{ timeout: 1300 }}
      toggle={toggleModal}
      className={'toggleModel'}
    >
      <ModalHeader toggle={toggleModal}>Annotate your data</ModalHeader>
      <ModalBody>{modalContent}</ModalBody>
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
