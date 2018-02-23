import React, { Component } from 'react';
import { connect } from 'react-redux';
import { App } from '../components';
import { getBoards } from '../actions';

const mapStateToProps = state => {
  return {
    cardInfo: state.cardInfo,
    boardsInfo: state.boardsInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
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
    this.props.getBoards();
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
          boards={this.props.boardsInfo.boards} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
