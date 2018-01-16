import React, { Component } from 'react';
import { connect } from 'react-redux';
import { App } from '../components';
import { getUsers, getBoards, getCurrentUser } from '../actions';

const mapStateToProps = state => {
  return {
    board: state.boardInfo.board,
    boards: state.boardsInfo.boards,
    users: state.usersInfo.users,
    currentUser: state.currentUserInfo.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    getBoards: () => dispatch(getBoards()),
    getCurrentUser: () => dispatch(getCurrentUser())
  };
};

class AppContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getBoards();
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="AppContainer">
        <App
          users={this.props.users}
          boards={this.props.boards}
          currentUser={this.props.currentUser}
          board={this.props.board} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
