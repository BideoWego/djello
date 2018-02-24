import React, { Component } from 'react';
import { Navigation } from '../components';
import { getBoards, destroySession } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    boardsInfo: state.boardsInfo,
    currentUser: state.currentUserInfo.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBoards: () => dispatch(getBoards()),
    destroySession: () => dispatch(destroySession())
  };
};

class NavigationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    this.props.getBoards();
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="NavigationContainer">
        <Navigation
          brand={this.props.brand}
          currentUser={this.props.currentUser}
          onClickBoardCreate={this.props.onClickBoardCreate}
          boardsInfo={this.props.boardsInfo}
          isOpen={this.state.isOpen}
          destroySession={this.props.destroySession}
          toggle={this.toggle} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);
