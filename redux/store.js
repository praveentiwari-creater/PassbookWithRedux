import {createStore,applyMiddleware} from 'redux';
import ActionReducer from './STATE/ActionReducer';
import logger from 'redux-logger';
const store=createStore(ActionReducer,applyMiddleware(logger));
export default store;