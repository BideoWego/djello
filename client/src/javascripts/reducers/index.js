import boardInfo from './board_info_reducer';
import boardsInfo from './boards_info_reducer';
import usersInfo from './users_info_reducer';
import currentUserInfo from './current_user_info_reducer';
import { combineReducers } from 'redux';


export default combineReducers({
  boardInfo,
  boardsInfo,
  usersInfo,
  currentUserInfo
});
