import { connect } from 'react-redux';
import { List } from '../components';
import { destroyList } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    onClickListDelete: id => {
      dispatch(destroyList(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(List);
