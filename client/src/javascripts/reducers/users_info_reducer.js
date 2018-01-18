import * as actions from '../actions';
import { default as initialState } from '../data';
import BaseReducer from './base_reducer';

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

export default function usersInfo(state=initialState.usersInfo, action) {
  return new UsersInfoReducer(state, action).run();
}
