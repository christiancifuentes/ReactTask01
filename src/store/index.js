import { combineReducers, createStore } from 'redux'

import authors from './authors/reducer'
import courses from './courses/reducer'
import user from './user/reducer'

const todoApp = combineReducers({
    authors,
    courses,
    user
  });

const store = createStore(todoApp);

export default store;

console.log(store);
