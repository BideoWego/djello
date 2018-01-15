import * as actions from './actions';
import { combineReducers } from 'redux';


// ----------------------------------------
// Initial State
// ----------------------------------------
const initialState = {
  boardsInfo: {
    boards: [],
    isFetching: false
  },
  usersInfo: {
    users: [],
    isFetching: false
  },
  currentUserInfo: {
    currentUser: null,
    isFetching: false
  }
};


// ----------------------------------------
// Base Reducer
// ----------------------------------------
class BaseReducer {
  constructor(state, action) {
    this.state = state;
    this.action = action;
  }

  run() {
    return this.action && this[this.action.type] ?
      this[this.action.type]() :
      this.state;
  }
}


// ----------------------------------------
// Boards Info
// ----------------------------------------
class BoardsInfoReducer extends BaseReducer {
  [actions.REQUESTING_BOARDS]() {
    return {
      ...this.state,
      isFetching: true
    };
  }

  [actions.REQUEST_SUCCEEDED_BOARDS]() {
    return {
      ...this.state,
      isFetching: false
    };
  }

  [actions.REQUEST_FAILED_BOARDS]() {
    return {
      ...this.state,
      isFetching: false,
      error: this.action.error
    };
  }

  [actions.SET_BOARDS]() {
    return {
      ...this.state,
      boards: this.action.data
    };
  }
}

export function boardsInfo(state=initialState.boardsInfo, action) {
  return new BoardsInfoReducer(state, action).run();
}



// ----------------------------------------
// Users Info
// ----------------------------------------
class UsersInfoReducer extends BaseReducer {
  [actions.REQUESTING_USERS]() {
    return {
      ...this.state,
      isFetching: true
    };
  }

  [actions.REQUEST_SUCCEEDED_USERS]() {
    return {
      ...this.state,
      isFetching: false
    };
  }

  [actions.REQUEST_FAILED_USERS]() {
    return {
      ...this.state,
      isFetching: false,
      error: this.action.error
    };
  }

  [actions.SET_USERS]() {
    return {
      ...this.state,
      users: this.action.data
    };
  }
}

export function usersInfo(state=initialState.usersInfo, action) {
  return new UsersInfoReducer(state, action).run();
}


// ----------------------------------------
// Current User Info
// ----------------------------------------
class CurrentUserInfoReducer extends BaseReducer {
  [actions.REQUESTING_CURRENT_USER]() {
    return {
      ...this.state,
      isFetching: true
    };
  }

  [actions.REQUEST_SUCCEEDED_CURRENT_USER]() {
    return {
      ...this.state,
      isFetching: false
    };
  }

  [actions.REQUEST_FAILED_CURRENT_USER]() {
    return {
      ...this.state,
      isFetching: false,
      error: this.action.error
    };
  }

  [actions.SET_CURRENT_USER]() {
    return {
      ...this.state,
      currentUser: this.action.data
    };
  }
}

export function currentUserInfo(state=initialState.currentUserInfo, action) {
  return new CurrentUserInfoReducer(state, action).run();
}


export default combineReducers({
  boardsInfo,
  usersInfo,
  currentUserInfo
});
