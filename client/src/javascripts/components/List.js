import React from 'react';
import { Card } from '.';

const List = ({ list }) => {
  return (
    <div className="List">
      <h3>List: {list.name}</h3>
      {list.Cards.length ? (
          <div className="row">
            {list.Cards.map(card => (
              <div className="col-12" key={card.id}>
                <Card card={card} />
              </div>
            ))}
          </div>
        ) : (
        <p className="text-muted">No cards yet</p>
      )}
    </div>
  );
};

export default List;
