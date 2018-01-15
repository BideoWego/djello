import React, { Component } from 'react';
import { connect } from 'react-redux';
import { App } from '../components';
import { getUsers, getBoards, getCurrentUser } from '../actions';


const mapStateToProps = state => {
  return {
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
        <App {...this.props} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
