import React, { Component } from 'react';
import { connect } from 'react-redux';
import { App } from '../components';
import { getUsers, getBoards } from '../actions';

const mapStateToProps = state => {
  // TODO: users is not used in the App component yet
  return {
    card: state.cardInfo.card,
    board: state.boardInfo.board,
    boards: state.boardsInfo.boards,
    users: state.usersInfo.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    getBoards: () => dispatch(getBoards())
  };
};

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenNewBoard: false
    };
  }

  componentDidMount() {
    this.props.getUsers();
    this.props.getBoards();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.board !== nextProps.board && !this.props.card) {
      this.props.history.push(`/boards/${ nextProps.board.id }`);
    }
  }

  onToggleNewBoard = () => {
    this.setState({
      isOpenNewBoard: !this.state.isOpenNewBoard
    });
  }

  render() {
    return (
      <div className="AppContainer">
        <App
          isOpenNewBoard={this.state.isOpenNewBoard}
          onToggleNewBoard={this.onToggleNewBoard}
          users={this.props.users}
          boards={this.props.boards}
          board={this.props.board} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
