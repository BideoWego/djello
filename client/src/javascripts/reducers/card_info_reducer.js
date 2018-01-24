import * as actions from '../actions';
import { default as initialState } from '../data';
import BaseReducer from './base_reducer';


// ----------------------------------------
// Card Info
// ----------------------------------------
class CardInfoReducer extends BaseReducer {

  // ----------------------------------------
  // Card
  // ----------------------------------------
  [actions.REQUESTING_CARD]() {
    return {
      ...this.state,
      isFetching: true
    };
  }

  [actions.REQUEST_SUCCEEDED_CARD]() {
    return {
      ...this.state,
      isFetching: false
    };
  }

  [actions.REQUEST_FAILED_CARD]() {
    return {
      ...this.state,
      isFetching: false,
      error: this.action.error
    };
  }

  [actions.SET_CARD]() {
    return {
      ...this.state,
      card: this.action.data
    };
  }
}

export default function cardInfo(state=initialState.cardInfo, action) {
  return new CardInfoReducer(state, action).run();
}
