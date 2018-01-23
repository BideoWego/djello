import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

const CardPreview = ({ card, onClickCardDelete }) => (
  <div className="Card mt-4">
    <Card>
      <CardBody>
        <CardTitle>
          {card.name}
          {' '}
          <a
            href=""
            className="text-danger"
            onClick={e => {
              e.preventDefault();
              onClickCardDelete(card.id);
              return false;
            }}>
            &times;
          </a>
        </CardTitle>
      </CardBody>
    </Card>
  </div>
);

export default CardPreview;
