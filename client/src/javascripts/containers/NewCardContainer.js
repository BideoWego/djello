import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NewCard } from '../components';
import { createCard } from '../actions';
import serialize from 'form-serialize';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const card = serialize(e.target, { hash: true });
      dispatch(createCard(card));
    }
  };
};

class NewCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCard: { name: '' },
      isOpenNewCard: false
    };
  }

  onToggleNewCard = () => {
    this.setState({
      isOpenNewCard: !this.state.isOpenNewCard
    });
  }

  render() {
    return (
      <div className="NewCardContainer">
        <NewCard
          list={this.props.list}
          isOpen={this.state.isOpenNewCard}
          onSubmit={this.props.onSubmit}
          newCard={this.state.newCard}
          toggle={this.onToggleNewCard}
          {...this.props} />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewCardContainer);
