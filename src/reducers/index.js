import { combineReducers } from 'redux';
import Records from './Details.js';
import ActiveGuitar from './game_select.js'
const UserReducers = combineReducers({
  guitars:Records,
  active_guitar:ActiveGuitar
});

export default UserReducers;
