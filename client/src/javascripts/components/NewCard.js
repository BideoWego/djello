import React from 'react';
import {
  Button,
  Input,
  Form,
  FormGroup
} from 'reactstrap';

const NewCard = ({ list, toggle, isOpen, onSubmit }) => {
  if (!isOpen) {
    return (
      <div className="col" key="create-card">
        <a href="" className="text-muted" onClick={e => {
          e.preventDefault();
          toggle();
          return false;
        }} >
          + Create a card
        </a>
      </div>
    );
  }

  return (
    <div className="NewCard">
      <h3>Create a Card</h3>
      <Form onSubmit={e => {
        onSubmit(e);
        toggle();
      }}>
        <Input type="hidden" name="card[listId]" value={list.id} />
        <FormGroup>
          <Input
            name="card[name]"
            placeholder="Card name..."
            autoFocus />
        </FormGroup>
        <FormGroup>
          <Button color="primary">
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default NewCard;
