import React from 'react';
import {
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';

const Boards = ({ boards }) => {
  return (
    <div className="Boards">
      <h1>Boards</h1>
      {boards.map(board => (
        <Card key={board.id}>
          <CardBody>
            <CardTitle>{board.name}</CardTitle>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Boards;
