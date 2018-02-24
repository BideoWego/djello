import { connect } from 'react-redux';
import { List } from '../components';
import { destroyList, updateList } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    onClickListDelete: id => {
      dispatch(destroyList(id));
    },
    onSubmitListUpdate: (id, data) => dispatch(updateList(id, data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(List);
