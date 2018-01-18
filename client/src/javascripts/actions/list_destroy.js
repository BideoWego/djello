import { apiUrlFor } from '../helpers';
import { getBoard } from './board';

// ----------------------------------------
// List Destroy
// ----------------------------------------
export const REQUESTING_LIST_DESTROY = 'REQUESTING_LIST_DESTROY';
export const REQUEST_SUCCEEDED_LIST_DESTROY = 'REQUEST_SUCCEEDED_LIST_DESTROY';
export const REQUEST_FAILED_LIST_DESTROY = 'REQUEST_FAILED_LIST_DESTROY';

export function requestingListDestroy() {
  return {
    type: REQUESTING_LIST_DESTROY
  };
}

export function requestSucceededListDestroy() {
  return {
    type: REQUEST_SUCCEEDED_LIST_DESTROY
  };
}

export function requestFailedListDestroy(error) {
  return {
    type: REQUEST_FAILED_LIST_DESTROY,
    error
  };
}

export function destroyList(id) {
  return async dispatch => {
    try {
      dispatch(requestingListDestroy());
      const response = await fetch(apiUrlFor(`/lists/${ id }`), {
        method: 'DELETE'
      });
      // TODO check response status code
      const list = await response.json();
      dispatch(requestSucceededListDestroy(list));
      dispatch(getBoard(list.boardId));
    } catch (e) {
      dispatch(requestFailedListDestroy(e));
    }
  };
}
