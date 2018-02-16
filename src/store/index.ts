import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { State, reducer } from '../reducers'
import thunkMiddleware from 'redux-thunk';

/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */
const store = createStore<State>(reducer, applyMiddleware(thunkMiddleware, logger))

export default store