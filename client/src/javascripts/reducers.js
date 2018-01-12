import * as actions from './actions';

const initialState = {
  isFetching: false,
  boards: [],
  users: [],
  currentUser: null
};


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


class Djello extends BaseReducer {
  [actions.REQUESTING]() {
    return {
      ...this.state,
      isFetching: true
    };
  }

  [actions.REQUEST_SUCCEEDED]() {
    return {
      ...this.state,
      isFetching: false
    };
  }

  [actions.REQUEST_FAILED]() {
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

  [actions.SET_USERS]() {
    return {
      ...this.state,
      users: this.action.data
    };
  }

  [actions.SET_CURRENT_USER]() {
    return {
      ...this.state,
      currentUser: this.action.data
    };
  }
}


export default function djello(state=initialState, action) {
  return new Djello(state, action).run();
}
