import { apiUrlFor } from '../helpers';
import { getBoards } from './boards';

// ----------------------------------------
// Board Create
// ----------------------------------------
export const REQUESTING_BOARD_CREATE = 'REQUESTING_BOARD_CREATE';
export const REQUEST_SUCCEEDED_BOARD_CREATE = 'REQUEST_SUCCEEDED_BOARD_CREATE';
export const REQUEST_FAILED_BOARD_CREATE = 'REQUEST_FAILED_BOARD_CREATE';

export function requestingBoardCreate() {
  return {
    type: REQUESTING_BOARD_CREATE
  };
}

export function requestSucceededBoardCreate(board) {
  return {
    type: REQUEST_SUCCEEDED_BOARD_CREATE,
    data: board
  };
}

export function requestFailedBoardCreate(error) {
  return {
    type: REQUEST_FAILED_BOARD_CREATE,
    error
  };
}

export function createBoard(data) {
  return async dispatch => {
    try {
      dispatch(requestingBoardCreate());
      const response = await fetch(apiUrlFor('/boards'), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      // TODO check response status code
      const board = await response.json();
      console.log(board);
      dispatch(requestSucceededBoardCreate(board));
      dispatch(getBoards());
    } catch (e) {
      dispatch(requestFailedBoardCreate(e));
    }
  };
}
