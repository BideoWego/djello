import React, { Component } from 'react';
import { Navigation } from '../components';

class NavigationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
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
          onClickCreateBoard={this.props.onClickCreateBoard}
          boards={this.props.boards}
          isOpen={this.state.isOpen}
          toggle={this.toggle} />
      </div>
    );
  }
}

export default NavigationContainer;