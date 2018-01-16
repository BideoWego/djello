import React from 'react';

const Card = ({ card }) => (
  <div className="Card">
    <h4>Card: {card.name}</h4>
    <h5>Priority: {card.priority}</h5>
    <p>Description: {card.description}</p>
  </div>
);

export default Card;
