import React from 'react';
import { Card } from '.';

const List = ({ list, onClickListDelete }) => {
  return (
    <div className="List">
      <h3>
        List: {list.name}
        {' '}
        <a
          href=""
          className="text-danger"
          onClick={e => {
            e.preventDefault();
            onClickListDelete(list.id);
            return false;
          }}>
          &times;
        </a>
      </h3>
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
