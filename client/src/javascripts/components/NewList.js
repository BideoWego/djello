import React from 'react';
import {
  Button,
  Input,
  Form,
  FormGroup
} from 'reactstrap';

const NewList = ({ board, toggle, isOpen, onSubmit }) => {
  if (!isOpen) {
    return (
      <div className="col" key="create-list">
        <a href="" onClick={e => {
          e.preventDefault();
          toggle();
          return false;
        }} >
          + Create a list
        </a>
      </div>
    );
  }

  return (
    <div className="NewList">
      <h3>Create a List</h3>
      <Form onSubmit={e => {
        onSubmit(e);
        toggle();
      }}>
        <Input type="hidden" name="list[boardId]" value={board.id} />
        <FormGroup>
          <Input
            name="list[name]"
            placeholder="List name..."
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

export default NewList;
