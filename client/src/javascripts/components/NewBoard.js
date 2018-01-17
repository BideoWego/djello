import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from 'reactstrap';

const NewBoard = ({ toggle, isOpen, onSubmit }) => (
  <div className="NewBoard">
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create a Board</ModalHeader>
      <ModalBody>
        <Input placeholder="Board name..." />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Submit</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);

export default NewBoard;
