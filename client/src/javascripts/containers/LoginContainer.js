import React, { Component } from 'react';
import { getCurrentUser, createSession } from '../actions';
import { connect } from 'react-redux';
import { Login } from '../components';
import serialize from 'form-serialize';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    currentUser: state.currentUserInfo.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser()),
    createSession: data => dispatch(createSession(data))
  };
};

class LoginContainer extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (!this.props.currentUser && !token) {
      this.props.history.push('/login');
    }

    if (!this.props.currentUser && token) {
      this.props.getCurrentUser();
    }
  }

  onSubmitLogin = e => {
    e.preventDefault();
    const data = serialize(e.target, { hash: true });
    this.props.createSession(data);
  }

  render () {
    return (
      <div className="LoginContainer">
        {this.props.currentUser ?
          this.props.children :
          <Login onSubmit={this.onSubmitLogin} />}
      </div>
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer));
