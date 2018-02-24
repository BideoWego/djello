import React, { Component } from 'react';
import { App } from '../components';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenNewBoard: false
    };
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
          boardsInfo={this.props.boardsInfo} />
      </div>
    );
  }
}

export default AppContainer;
