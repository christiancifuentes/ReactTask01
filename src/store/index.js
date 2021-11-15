import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxTrunk from 'redux-thunk'

import authors from './authors/reducer'
import courses from './courses/reducer'
import user from './user/reducer'

const rootReducer = combineReducers({
    authors,
    courses,
    user
  });

const middleware = [ReduxTrunk]

const store = createStore(
  rootReducer,
  composeWithDevTools (applyMiddleware(...middleware))
  );

export default store;


