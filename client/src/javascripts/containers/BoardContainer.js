import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Board } from '../components';
import { getBoard } from '../actions';

const mapStateToProps = state => {
  return {
    boardInfo: state.boardInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBoard: id => dispatch(getBoard(id))
  };
};

class BoardContainer extends Component {
  componentDidMount() {
    this.props.getBoard(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.getBoard(nextProps.match.params.id);
    }
  }

  render() {
    return (
      <div className="BoardContainer">
        <Board
          board={this.props.boardInfo.board}
          isFetching={this.props.boardInfo.isFetching} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
