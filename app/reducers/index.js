// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import client from './client';
import list from './list';

const rootReducer = combineReducers({
  client,
  list,
  router,
});

export default rootReducer;
