import { apiUrlFor } from '../helpers';
import { getBoards } from './boards';

// ----------------------------------------
// Board Destroy
// ----------------------------------------
export const REQUESTING_BOARD_DESTROY = 'REQUESTING_BOARD_DESTROY';
export const REQUEST_SUCCEEDED_BOARD_DESTROY = 'REQUEST_SUCCEEDED_BOARD_DESTROY';
export const REQUEST_FAILED_BOARD_DESTROY = 'REQUEST_FAILED_BOARD_DESTROY';

export function requestingBoardDestroy() {
  return {
    type: REQUESTING_BOARD_DESTROY
  };
}

export function requestSucceededBoardDestroy() {
  return {
    type: REQUEST_SUCCEEDED_BOARD_DESTROY
  };
}

export function requestFailedBoardDestroy(error) {
  return {
    type: REQUEST_FAILED_BOARD_DESTROY,
    error
  };
}

export function destroyBoard(id) {
  return async dispatch => {
    try {
      dispatch(requestingBoardDestroy());
      const response = await fetch(apiUrlFor(`/boards/${ id }`), {
        method: 'DELETE'
      });
      // TODO check response status code
      const board = await response.json();
      dispatch(requestSucceededBoardDestroy(board));
      dispatch(getBoards());
    } catch (e) {
      dispatch(requestFailedBoardDestroy(e));
    }
  };
}
