import { combineReducers } from 'redux'
import * as fromProperties from './properties'

/*
 * This is the root state of the app
 * It contains every substate of the app
 */  
export interface State {
    properties: fromProperties.State
}

/*
 * initialState of the app
 */
export const initialState: State = {
    properties: fromProperties.initialState
}

/*
 * Root reducer of the app
 * Returned reducer will be of type Reducer<State>
 */
export const reducer = combineReducers<State>({
  properties: fromProperties.reducer
})