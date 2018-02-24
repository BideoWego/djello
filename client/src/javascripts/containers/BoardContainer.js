import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Board } from '../components';
import { getBoard, destroyBoard, updateBoard } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    isCardBackground: ownProps.isCardBackground,
    cardInfo: state.cardInfo,
    boardInfo: state.boardInfo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getBoard: id => dispatch(getBoard(id)),
    destroyBoard: id => {
      dispatch(destroyBoard(id));
      ownProps.history.push('/');
    },
    updateBoard: (id, data) => dispatch(updateBoard(id, { board: data }))
  };
};

class BoardContainer extends Component {
  componentDidMount() {
    if (this.props.isCardBackground) {
      return;
    }

    this.props.getBoard(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isCardBackground) {
      this._getBoardFromCardInfo(nextProps);
      return;
    }

    this._getBoardFromMatchParams(nextProps);
  }

  render() {
    return (
      <div className="BoardContainer">
        <Board
          boardInfo={this.props.boardInfo}
          onClickBoardDelete={this.props.destroyBoard}
          onSubmitBoardUpdate={this.props.updateBoard} />
      </div>
    );
  }

  _getBoardFromMatchParams(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.getBoard(nextProps.match.params.id);
    }
  }

  _getBoardFromCardInfo(nextProps) {
    if (this.props.boardInfo.isFetching) {
      return;
    }

    if (nextProps.cardInfo.card && !this.props.boardInfo.board) {
      this.props.getBoard(nextProps.cardInfo.card.List.boardId);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
