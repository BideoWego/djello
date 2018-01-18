import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NewList } from '../components';
import { createList } from '../actions';
import serialize from 'form-serialize';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const list = serialize(e.target, { hash: true });
      dispatch(createList(list));
    }
  };
};

class NewListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: { name: '' },
      isOpenNewList: false
    };
  }

  onToggleNewList = () => {
    this.setState({
      isOpenNewList: !this.state.isOpenNewList
    });
  }

  render() {
    return (
      <div className="NewListContainer">
        <NewList
          isOpen={this.state.isOpenNewList}
          onSubmit={this.props.onSubmit}
          newList={this.state.newList}
          toggle={this.onToggleNewList}
          {...this.props} />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewListContainer);
