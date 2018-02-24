import { apiUrlFor } from '../helpers';
import { setBoard } from './board';

// ----------------------------------------
// Board Update
// ----------------------------------------
export const REQUESTING_BOARD_UPDATE = 'REQUESTING_BOARD_UPDATE';
export const REQUEST_SUCCEEDED_BOARD_UPDATE = 'REQUEST_SUCCEEDED_BOARD_UPDATE';
export const REQUEST_FAILED_BOARD_UPDATE = 'REQUEST_FAILED_BOARD_UPDATE';

export function requestingBoardUpdate() {
  return {
    type: REQUESTING_BOARD_UPDATE
  };
}

export function requestSucceededBoardUpdate() {
  return {
    type: REQUEST_SUCCEEDED_BOARD_UPDATE
  };
}

export function requestFailedBoardUpdate(error) {
  return {
    type: REQUEST_FAILED_BOARD_UPDATE,
    error
  };
}

export function updateBoard(id, data) {
  return async dispatch => {
    try {
      dispatch(requestingBoardUpdate());
      const response = await fetch(apiUrlFor(`/boards/${ id }`), {
        method: 'PUT',
        body: JSON.stringify({
          board: data
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      // TODO check response status code
      const board = await response.json();
      dispatch(requestSucceededBoardUpdate(board));
      dispatch(setBoard(board));
    } catch (e) {
      dispatch(requestFailedBoardUpdate(e));
    }
  };
}
