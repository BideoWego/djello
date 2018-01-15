// ----------------------------------------
// API End-Point
// ----------------------------------------
const env = process.env.NODE_ENV || 'development';
const API_URL = {
  development: 'http://localhost:3001',
  test: 'http://localhost:8888',
  production: 'http://bideowego-djello-api.herokuapp.com'
}[env];
const apiUrlFor = uri => `${ API_URL }${ uri }`;


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
    dispatch(requestingBoards());

    try {
      const response = await fetch(apiUrlFor('/boards'));
      const boards = await response.json();
      dispatch(requestSucceededBoards());
      dispatch(setBoards(boards));
    } catch (e) {
      dispatch(requestFailedBoards(e));
    }
  };
}

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
    dispatch(requestingUsers());

    try {
      const response = await fetch(apiUrlFor('/users'));
      const users = await response.json();
      dispatch(requestSucceededUsers());
      dispatch(setUsers(users));
    } catch (e) {
      dispatch(requestFailedUsers(e));
    }
  };
}


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
    dispatch(requestingCurrentUser());

    try {
      const response = await fetch(apiUrlFor('/users/me'));
      const currentUser = await response.json();
      dispatch(requestSucceededCurrentUser());
      dispatch(setCurrentUser(currentUser));
    } catch (e) {
      dispatch(requestFailedCurrentUser(e));
    }
  };
}
