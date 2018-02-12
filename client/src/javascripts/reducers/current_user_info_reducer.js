import * as actions from '../actions';
import { default as initialState } from '../data';
import BaseReducer from './base_reducer';

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

  [actions.REQUEST_SUCCEEDED_SESSION_DESTROY]() {
    return {
      ...this.state,
      currentUser: null
    };
  }
}

export default function currentUserInfo(state=initialState.currentUserInfo, action) {
  return new CurrentUserInfoReducer(state, action).run();
}
