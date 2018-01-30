import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form
} from 'reactstrap';
import { EditableContainer } from '../containers';

const CardDetail = ({ card, toggle, isOpen, onSubmit }) => (
  <div className="NewBoard">
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <EditableContainer value={card.name} />
      </ModalHeader>
      <Form onSubmit={e => {
        onSubmit(e);
        toggle();
      }}>
        <ModalBody>
          <EditableContainer value={card.description} type="textarea" />
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
