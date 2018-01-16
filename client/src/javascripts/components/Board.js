import React from 'react';

const Board = ({ board, isFetching }) => {
  if (isFetching) {
    return <p className="text-muted">Loading...</p>
  }

  return (
    <div className="Board">
      {board ?
        <pre>{JSON.stringify(board, null, 2)}</pre> :
        <p className="text-danger text-center">
          Board not found
        </p>}
    </div>
  );
};


export default Board;
