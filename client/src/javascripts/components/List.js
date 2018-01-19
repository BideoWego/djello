import React from 'react';
import { Card } from '.';
import { NewCardContainer } from '../containers';

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
      <div className="row">
        {list.Cards.length ? (
          list.Cards.map(card => (
            <div className="col-12" key={card.id}>
              <Card card={card} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-muted">No cards yet</p>
          </div>
        )}
        <div className="col-12">
          <NewCardContainer list={list} />
        </div>
      </div>
    </div>
  );
};

export default List;
