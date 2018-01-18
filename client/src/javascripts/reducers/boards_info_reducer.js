import * as actions from '../actions';
import { default as initialState } from '../data';
import BaseReducer from './base_reducer';

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

export default function boardsInfo(state=initialState.boardsInfo, action) {
  return new BoardsInfoReducer(state, action).run();
}
