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

const CardDetail = ({ cardInfo, toggle, isOpen, onSubmitCardUpdate }) => {
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
                <EditableContainer
                  value={cardInfo.card.name}
                  onSubmit={name => {
                    onSubmitCardUpdate(cardInfo.card.id, { card: { name } });
                  }} />
              </ModalHeader>
              <Form onSubmit={e => {
                e.preventDefault();
                toggle();
              }}>
                <ModalBody>
                  <EditableContainer
                    value={cardInfo.card.description}
                    type="textarea"
                    onSubmit={description => {
                      onSubmitCardUpdate(
                        cardInfo.card.id,
                        { card: { description } }
                      );
                    }} />
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={toggle}>Close</Button>
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
