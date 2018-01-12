export const REQUESTING = 'REQUESTING';
export const REQUEST_SUCCEEDED = 'REQUEST_SUCCEEDED';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const SET_BOARDS = 'SET_BOARDS';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';


const env = process.env.NODE_ENV || 'development';
const API_URL = {
  development: 'http://localhost:3001',
  test: 'http://localhost:8888',
  production: 'http://bideowego-djello-api.herokuapp.com'
}[env];
const apiUrlFor = uri => `${ API_URL }${ uri }`;


export function requesting() {
  return {
    type: REQUESTING
  };
}


export function requestSucceeded() {
  return {
    type: REQUEST_SUCCEEDED
  };
}


export function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    error
  };
}


export function setBoards(boards) {
  return {
    type: SET_BOARDS,
    data: boards
  };
}


export function setUsers(users) {
  return {
    type: SET_USERS,
    data: users
  };
}


export function setCurrentUser(currentUser) {
  return {
    type: SET_CURRENT_USER,
    data: currentUser
  };
}


export function getBoards() {
  return async dispatch => {
    dispatch(requesting());

    try {
      const response = await fetch(apiUrlFor('/boards'));
      const boards = await response.json();
      dispatch(requestSucceeded());
      dispatch(setBoards(boards));
    } catch (e) {
      dispatch(requestFailed(e));
    }
  };
}


export function getUsers() {
  return async dispatch => {
    dispatch(requesting());

    try {
      const response = await fetch(apiUrlFor('/users'));
      const users = await response.json();
      dispatch(requestSucceeded());
      dispatch(setUsers(users));
    } catch (e) {
      dispatch(requestFailed(e));
    }
  };
}


export function getCurrentUser() {
  return async dispatch => {
    dispatch(requesting());

    try {
      const response = await fetch(apiUrlFor('/users/me'));
      const currentUser = await response.json();
      dispatch(requestSucceeded());
      dispatch(setCurrentUser(currentUser));
    } catch (e) {
      dispatch(requestFailed(e));
    }
  };
}
