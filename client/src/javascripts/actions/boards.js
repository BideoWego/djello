import { apiUrlFor } from '../helpers';

// ----------------------------------------
// Boards
// ----------------------------------------
export const REQUESTING_BOARDS = 'REQUESTING_BOARDS';
export const REQUEST_SUCCEEDED_BOARDS = 'REQUEST_SUCCEEDED_BOARDS';
export const REQUEST_FAILED_BOARDS = 'REQUEST_FAILED_BOARDS';
export const SET_BOARDS = 'SET_BOARDS';

export function requestingBoards() {
  return {
    type: REQUESTING_BOARDS
  };
}

export function requestSucceededBoards() {
  return {
    type: REQUEST_SUCCEEDED_BOARDS
  };
}

export function requestFailedBoards(error) {
  return {
    type: REQUEST_FAILED_BOARDS,
    error
  };
}

export function setBoards(boards) {
  return {
    type: SET_BOARDS,
    data: boards
  };
}

export function getBoards() {
  return async dispatch => {
    try {
      dispatch(requestingBoards());
      const response = await fetch(apiUrlFor('/boards'));
      const boards = await response.json();
      dispatch(requestSucceededBoards());
      dispatch(setBoards(boards));
    } catch (e) {
      dispatch(requestFailedBoards(e));
    }
  };
}
