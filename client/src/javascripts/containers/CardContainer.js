import React, { Component } from 'react';
import { CardDetail } from '../components';
import { connect } from 'react-redux';
import { getCard } from '../actions';

const mapStateToProps = state => {
  return {
    cardInfo: state.cardInfo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCard: id => dispatch(getCard(id))
  };
};

class CardContainer extends Component {
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
          card={this.props.cardInfo.card}
          toggle={this.toggle}
          isOpen={this.state.isOpen}
          onSubmit={() => console.log('Submitting...')} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
