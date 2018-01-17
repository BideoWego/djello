import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NewBoard } from '../components';
import { createBoard } from '../actions';
import serialize from 'form-serialize';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const board = serialize(e.target, { hash: true });
      dispatch(createBoard(board));
    }
  };
};

class NewBoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBoard: { name: '' }
    };
  }

  render() {
    return (
      <div className="NewBoardContainer">
        <NewBoard
          onSubmit={this.props.onSubmit}
          newBoard={this.state.newBoard}
          {...this.props} />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewBoardContainer);
