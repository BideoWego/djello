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

const CardDetail = ({ card, toggle, isOpen, onSubmit }) => (
  <div className="NewBoard">
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{card.name}</ModalHeader>
      <Form onSubmit={e => {
        onSubmit(e);
        toggle();
      }}>
        <ModalBody>
          {card.description}
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

export default CardDetail;
