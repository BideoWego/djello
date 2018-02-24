import { apiUrlFor } from '../helpers';
import { getBoard } from './board';

// ----------------------------------------
// List Update
// ----------------------------------------
export const REQUESTING_LIST_UPDATE = 'REQUESTING_LIST_UPDATE';
export const REQUEST_SUCCEEDED_LIST_UPDATE = 'REQUEST_SUCCEEDED_LIST_UPDATE';
export const REQUEST_FAILED_LIST_UPDATE = 'REQUEST_FAILED_LIST_UPDATE';

export function requestingListUpdate() {
  return {
    type: REQUESTING_LIST_UPDATE
  };
}

export function requestSucceededListUpdate(list) {
  return {
    type: REQUEST_SUCCEEDED_LIST_UPDATE,
    data: list
  };
}

export function requestFailedListUpdate(error) {
  return {
    type: REQUEST_FAILED_LIST_UPDATE,
    error
  };
}

export function updateList(id, data) {
  return async dispatch => {
    try {
      dispatch(requestingListUpdate());
      const response = await fetch(apiUrlFor(`/lists/${ id }`), {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      // TODO check response status code
      const list = await response.json();
      dispatch(requestSucceededListUpdate(list));
      dispatch(getBoard(list.boardId));
    } catch (e) {
      dispatch(requestFailedListUpdate(e));
    }
  };
}
