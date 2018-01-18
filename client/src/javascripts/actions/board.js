import { apiUrlFor } from '../helpers';

// ----------------------------------------
// Board
// ----------------------------------------
export const REQUESTING_BOARD = 'REQUESTING_BOARD';
export const REQUEST_SUCCEEDED_BOARD = 'REQUEST_SUCCEEDED_BOARD';
export const REQUEST_FAILED_BOARD = 'REQUEST_FAILED_BOARD';
export const SET_BOARD = 'SET_BOARD';

export function requestingBoard() {
  return {
    type: REQUESTING_BOARD
  };
}

export function requestSucceededBoard() {
  return {
    type: REQUEST_SUCCEEDED_BOARD
  };
}

export function requestFailedBoard(error) {
  return {
    type: REQUEST_FAILED_BOARD,
    error
  };
}

export function setBoard(board) {
  return {
    type: SET_BOARD,
    data: board
  };
}

export function getBoard(id) {
  return async dispatch => {
    try {
      dispatch(requestingBoard());
      const response = await fetch(apiUrlFor(`/boards/${ id }`));
      const board = await response.json();
      dispatch(requestSucceededBoard());
      dispatch(setBoard(board));
    } catch (e) {
      dispatch(requestFailedBoard(e));
    }
  };
}
