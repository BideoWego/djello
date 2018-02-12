import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destroySession } from '../actions';
import { Logout } from '../components';

const mapDispatchToProps = dispatch => {
  return {
    destroySession: () => dispatch(destroySession())
  };
};

class LogoutContainer extends Component {
  componentDidMount() {
    this.props.destroySession();
    this.props.history.push('/login');
  }

  render () {
    return (
      <div className="LogoutContainer">
        <Logout />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(LogoutContainer);
