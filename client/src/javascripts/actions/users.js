import { apiUrlFor } from '../helpers';

// ----------------------------------------
// Users
// ----------------------------------------
export const REQUESTING_USERS = 'REQUESTING_USERS';
export const REQUEST_SUCCEEDED_USERS = 'REQUEST_SUCCEEDED_USERS';
export const REQUEST_FAILED_USERS = 'REQUEST_FAILED_USERS';
export const SET_USERS = 'SET_USERS';

export function requestingUsers() {
  return {
    type: REQUESTING_USERS
  };
}

export function requestSucceededUsers() {
  return {
    type: REQUEST_SUCCEEDED_USERS
  };
}

export function requestFailedUsers(error) {
  return {
    type: REQUEST_FAILED_USERS,
    error
  };
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    data: users
  };
}

export function getUsers() {
  return async dispatch => {
    try {
      dispatch(requestingUsers());
      const response = await fetch(apiUrlFor('/users'));
      const users = await response.json();
      dispatch(requestSucceededUsers());
      dispatch(setUsers(users));
    } catch (e) {
      dispatch(requestFailedUsers(e));
    }
  };
}
