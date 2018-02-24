import React from 'react';
import {
  NewListContainer,
  ListContainer,
  EditableContainer
} from '../containers';

const Board = ({
  boardInfo,
  onClickListCreate,
  onClickBoardDelete
}) => {
  if (boardInfo.isFetching) {
    return <p className="text-muted text-center">Loading...</p>
  }

  const { board } = boardInfo;

  if (!board) {
    return (
      <p className="text-danger text-center">
        Board not found
      </p>
    );
  }

  return (
    <div className="Board">
      <h2 className="text-center">
        <EditableContainer value={board.name}>
          {board.name}
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
        </EditableContainer>
      </h2>
      <div className="lists row mt-4">
        {board.Lists.length ? (
          board.Lists.map(list => (
            <div className="col-3" key={list.id}>
              <ListContainer list={list} />
            </div>
          ))
        ) : (
          <div className="col-3">
            <p className="text-muted text-center">
              No lists yet
            </p>
          </div>
        )}
        <div className="col-3">
          <NewListContainer board={board} />
        </div>
      </div>
    </div>
  );
};

export default Board;
