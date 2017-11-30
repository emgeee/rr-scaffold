import todo from './todo.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  todos: todo
});

export default rootReducer;
