import React from 'react';
import { List } from '.';

const Board = ({ board, onClickBoardDelete, isFetching }) => {
  if (isFetching) {
    return <p className="text-muted">Loading...</p>
  }

  if (!board) {
    return (
      <p className="text-danger text-center">
        Board not found
      </p>
    );
  }

  const createList = (
    <div className="col" key="create-list">
      <a href="" className="text-muted" onClick={e => {
        e.preventDefault();
        return false;
      }} >
        + Create a list
      </a>
    </div>
  );

  return (
    <div className="Board">
      <h2>
        Board: {board.name}
        {' '}
        <a
          href=""
          className="text-danger"
          onClick={e => {
            e.preventDefault();
            onClickBoardDelete(board.id);
            return false;
          }}>
          &times;
        </a>
      </h2>
      <div className="lists row">
        {board.Lists.length ? (
          board.Lists.map(list => (
            <div className="col" key={list.id}>
              <List list={list} />
            </div>
          ))
        ) : (
          <div className="col">
            <p className="text-muted text-center">
              No lists yet
            </p>
          </div>
        )}
        {createList}
      </div>
    </div>
  );
};

export default Board;
