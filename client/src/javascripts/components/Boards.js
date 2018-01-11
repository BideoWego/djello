import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

const Boards = ({ boards }) => {
  return (
    <div className="Boards">
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
