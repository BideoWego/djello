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

export default BaseReducer;
