import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import tasksReducer from '../reducers/tasks';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      tasks: tasksReducer,
      router: routerReducer,
    }),
    applyMiddleware(
      routerMiddleware(history),
      logger,
      thunk
    )
  );
}
