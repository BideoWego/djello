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

const CardDetail = ({ cardInfo, toggle, isOpen, onSubmit }) => {
  return (
    <div className="CardDetail">
      <Modal isOpen={isOpen} toggle={toggle}>
        {cardInfo.isFetching ? (
            <ModalBody>
              <p className="text-muted text-center">Loading...</p>
            </ModalBody>
          ) : (
            <div>
              <ModalHeader toggle={toggle}>
                <EditableContainer value={cardInfo.card.name} />
              </ModalHeader>
              <Form onSubmit={e => {
                onSubmit(e);
                toggle();
              }}>
                <ModalBody>
                  <EditableContainer value={cardInfo.card.description} type="textarea" />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary">
                    Submit
                  </Button>{' '}
                  <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
              </Form>
            </div>
          )
        }
      </Modal>
    </div>
  );
};

export default CardDetail;
