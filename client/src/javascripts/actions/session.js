import { apiUrlFor } from '../helpers';
import { getCurrentUser } from './current_user';

// ----------------------------------------
// Session Create
// ----------------------------------------
export const REQUESTING_SESSION_CREATE = 'REQUESTING_SESSION_CREATE';
export const REQUEST_SUCCEEDED_SESSION_CREATE = 'REQUEST_SUCCEEDED_SESSION_CREATE';
export const REQUEST_FAILED_SESSION_CREATE = 'REQUEST_FAILED_SESSION_CREATE';
export const SET_SESSION_CREATE = 'SET_SESSION_CREATE';

export function requestingSessionCreate() {
  return {
    type: REQUESTING_SESSION_CREATE
  };
}

export function requestSucceededSessionCreate() {
  return {
    type: REQUEST_SUCCEEDED_SESSION_CREATE
  };
}

export function requestFailedSessionCreate(error) {
  return {
    type: REQUEST_FAILED_SESSION_CREATE,
    error
  };
}

export function createSession({ email, password }) {
  return async dispatch => {
    try {
      dispatch(requestingSessionCreate());
      const response = await fetch(apiUrlFor('/login'), {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const session = await response.json();
      localStorage.setItem('token', session.token);
      dispatch(requestSucceededSessionCreate());
      dispatch(getCurrentUser());
    } catch (e) {
      dispatch(requestFailedSessionCreate(e));
    }
  };
}


// ----------------------------------------
// Session Destroy
// ----------------------------------------
export const REQUESTING_SESSION_DESTROY = 'REQUESTING_SESSION_DESTROY';
export const REQUEST_SUCCEEDED_SESSION_DESTROY = 'REQUEST_SUCCEEDED_SESSION_DESTROY';
export const REQUEST_FAILED_SESSION_DESTROY = 'REQUEST_FAILED_SESSION_DESTROY';
export const SET_SESSION_DESTROY = 'SET_SESSION_DESTROY';

export function requestingSessionDestroy() {
  return {
    type: REQUESTING_SESSION_DESTROY
  };
}

export function requestSucceededSessionDestroy() {
  return {
    type: REQUEST_SUCCEEDED_SESSION_DESTROY
  };
}

export function requestFailedSessionDestroy(error) {
  return {
    type: REQUEST_FAILED_SESSION_DESTROY,
    error
  };
}

export function destroySession() {
  return async dispatch => {
    try {
      dispatch(requestingSessionDestroy());
      localStorage.removeItem('token');
      dispatch(requestSucceededSessionDestroy());
    } catch (e) {
      dispatch(requestFailedSessionDestroy(e));
    }
  };
}
