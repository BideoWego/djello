import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form
} from 'reactstrap';

const NewBoard = ({ toggle, isOpen, onSubmit }) => (
  <div className="NewBoard">
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create a Board</ModalHeader>
      <Form onSubmit={e => {
        onSubmit(e);
        toggle();
      }}>
        <ModalBody>
          <Input
            name="board[name]"
            placeholder="Board name..."
            autoFocus />
        </ModalBody>
        <ModalFooter>
          <Button color="primary">
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Form>
    </Modal>
  </div>
);

export default NewBoard;
