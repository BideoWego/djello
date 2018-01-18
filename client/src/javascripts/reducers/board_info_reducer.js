import * as actions from '../actions';
import { default as initialState } from '../data';
import BaseReducer from './base_reducer';


// ----------------------------------------
// Board Info
// ----------------------------------------
class BoardInfoReducer extends BaseReducer {

  // ----------------------------------------
  // Board
  // ----------------------------------------
  [actions.REQUESTING_BOARD]() {
    return {
      ...this.state,
      isFetching: true
    };
  }

  [actions.REQUEST_SUCCEEDED_BOARD]() {
    return {
      ...this.state,
      isFetching: false
    };
  }

  [actions.REQUEST_FAILED_BOARD]() {
    return {
      ...this.state,
      isFetching: false,
      error: this.action.error
    };
  }

  [actions.SET_BOARD]() {
    return {
      ...this.state,
      board: this.action.data
    };
  }

  // ----------------------------------------
  // Board Destroy
  // ----------------------------------------
  [actions.REQUESTING_BOARD_DESTROY]() {
    return {
      ...this.state,
      isFetching: true
    };
  }

  [actions.REQUEST_SUCCEEDED_BOARD_DESTROY]() {
    return {
      ...this.state,
      isFetching: false,
      board: null
    };
  }

  [actions.REQUEST_FAILED_BOARD_DESTROY]() {
    return {
      ...this.state,
      isFetching: false,
      error: this.action.error
    };
  }

  // ----------------------------------------
  // Board Create
  // ----------------------------------------
  [actions.REQUESTING_BOARD_CREATE]() {
    return {
      ...this.state,
      isFetching: true
    };
  }

  [actions.REQUEST_SUCCEEDED_BOARD_CREATE]() {
    return {
      ...this.state,
      isFetching: false,
      board: this.action.data
    };
  }

  [actions.REQUEST_FAILED_BOARD_CREATE]() {
    return {
      ...this.state,
      isFetching: false,
      error: this.action.error
    };
  }

  // ----------------------------------------
  // List Create
  // ----------------------------------------
  [actions.REQUESTING_LIST_CREATE]() {
    return {
      ...this.state,
      isFetching: true
    };
  }

  [actions.REQUEST_SUCCEEDED_LIST_CREATE]() {
    return {
      ...this.state,
      isFetching: false
      // board: {
      //   ...this.state.board,
      //   Lists: [
      //     ...this.state.board.Lists,
      //     this.action.data
      //   ]
      // }
    };
  }

  [actions.REQUEST_FAILED_LIST_CREATE]() {
    return {
      ...this.state,
      isFetching: false,
      error: this.action.error
    };
  }
}

export default function boardInfo(state=initialState.boardInfo, action) {
  return new BoardInfoReducer(state, action).run();
}