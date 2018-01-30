import React from 'react';
import {
  NewCardContainer,
  CardPreviewContainer,
  EditableContainer
} from '../containers';

const List = ({ list, onClickListDelete }) => {
  return (
    <div className="List">
      <EditableContainer value={list.name}>
        <h3>
          {list.name}
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
      </EditableContainer>
      <div className="row">
        {list.Cards.length ? (
          list.Cards.map(card => (
            <div className="col-12" key={card.id}>
              <CardPreviewContainer card={card} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-muted">No cards yet</p>
          </div>
        )}
        <div className="col-12 mt-3">
          <NewCardContainer list={list} />
        </div>
      </div>
    </div>
  );
};

export default List;
