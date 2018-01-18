import { apiUrlFor } from '../helpers';
import { getBoard } from './board';

// ----------------------------------------
// List Create
// ----------------------------------------
export const REQUESTING_LIST_CREATE = 'REQUESTING_LIST_CREATE';
export const REQUEST_SUCCEEDED_LIST_CREATE = 'REQUEST_SUCCEEDED_LIST_CREATE';
export const REQUEST_FAILED_LIST_CREATE = 'REQUEST_FAILED_LIST_CREATE';

export function requestingListCreate() {
  return {
    type: REQUESTING_LIST_CREATE
  };
}

export function requestSucceededListCreate(list) {
  return {
    type: REQUEST_SUCCEEDED_LIST_CREATE,
    data: list
  };
}

export function requestFailedListCreate(error) {
  return {
    type: REQUEST_FAILED_LIST_CREATE,
    error
  };
}

export function createList(data) {
  return async dispatch => {
    try {
      dispatch(requestingListCreate());
      const response = await fetch(apiUrlFor('/lists'), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      // TODO check response status code
      const list = await response.json();
      dispatch(requestSucceededListCreate(list));
      dispatch(getBoard(list.boardId));
    } catch (e) {
      dispatch(requestFailedListCreate(e));
    }
  };
}
