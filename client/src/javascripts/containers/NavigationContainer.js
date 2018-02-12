import React, { Component } from 'react';
import { Navigation } from '../components';
import { destroySession } from '../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
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
          boards={this.props.boards}
          isOpen={this.state.isOpen}
          destroySession={this.props.destroySession}
          toggle={this.toggle} />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(NavigationContainer);
