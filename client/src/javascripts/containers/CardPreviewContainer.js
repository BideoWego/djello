import { connect } from 'react-redux';
import { CardPreview } from '../components';
import { destroyCard } from '../actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickCard: () => {
      ownProps.history.push(`/cards/${ ownProps.card.id }`);
    },
    onClickCardDelete: id => {
      dispatch(destroyCard(id));
    }
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(CardPreview));
