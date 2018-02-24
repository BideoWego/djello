import React, { Component } from 'react';
import { CardDetail } from '../components';
import { connect } from 'react-redux';
import { getCard, updateCard } from '../actions';

const mapStateToProps = state => {
  return {
    cardInfo: state.cardInfo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCard: id => dispatch(getCard(id)),
    updateCard: (id, data) => dispatch(updateCard(id, data))
  };
};

class CardDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  componentDidMount() {
    this.props.getCard(this.props.match.params.id);
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });

    this.props.history.push(
      `/boards/${ this.props.cardInfo.card.List.boardId }`
    );
  }

  render() {
    if (!this.props.cardInfo.card) {
      return null;
    }

    return (
      <div className="CardContainer">
        <CardDetail
          cardInfo={this.props.cardInfo}
          toggle={this.toggle}
          isOpen={this.state.isOpen}
          onSubmitCardUpdate={this.props.updateCard} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDetailContainer);
