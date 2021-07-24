import { combineReducers } from 'redux';

import { reducer as items } from '../modules/items';

const combineReducers1 = combineReducers({
  items,
});

export default combineReducers1;
