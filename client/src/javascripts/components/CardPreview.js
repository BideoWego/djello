import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

const CardPreview = ({ card, onClickCard, onClickCardDelete }) => (
  <div className="Card mt-4">
    <Card>
      <CardBody>
        <CardTitle>
          <a
            href=""
            onClick={e => {
              e.preventDefault();
              onClickCard(card.id);
              return false;
            }}>
            {card.name}
          </a>
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
