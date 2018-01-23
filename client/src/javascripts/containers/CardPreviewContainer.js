import { connect } from 'react-redux';
import { CardPreview } from '../components';
import { destroyCard } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    onClickCardDelete: id => {
      dispatch(destroyCard(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CardPreview);
