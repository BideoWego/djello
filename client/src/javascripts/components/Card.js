import React from 'react';

const Card = ({ card, onClickCardDelete }) => (
  <div className="Card mt-4">
    <h4>
      Card: {card.name}
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
    </h4>
    <h5>Priority: {card.priority}</h5>
    <p>Description: {card.description}</p>
  </div>
);

export default Card;
