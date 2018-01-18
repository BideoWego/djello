import { apiUrlFor } from '../helpers';

// ----------------------------------------
// Current User
// ----------------------------------------
export const REQUESTING_CURRENT_USER = 'REQUESTING_CURRENT_USER';
export const REQUEST_SUCCEEDED_CURRENT_USER = 'REQUEST_SUCCEEDED_CURRENT_USER';
export const REQUEST_FAILED_CURRENT_USER = 'REQUEST_FAILED_CURRENT_USER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function requestingCurrentUser() {
  return {
    type: REQUESTING_CURRENT_USER
  };
}

export function requestSucceededCurrentUser() {
  return {
    type: REQUEST_SUCCEEDED_CURRENT_USER
  };
}

export function requestFailedCurrentUser(error) {
  return {
    type: REQUEST_FAILED_CURRENT_USER,
    error
  };
}

export function setCurrentUser(currentUser) {
  return {
    type: SET_CURRENT_USER,
    data: currentUser
  };
}

export function getCurrentUser() {
  return async dispatch => {
    try {
      dispatch(requestingCurrentUser());
      const response = await fetch(apiUrlFor('/users/me'));
      const currentUser = await response.json();
      dispatch(requestSucceededCurrentUser());
      dispatch(setCurrentUser(currentUser));
    } catch (e) {
      dispatch(requestFailedCurrentUser(e));
    }
  };
}
