import Property from '../models/Property'
import { Action } from '../actions/properties'
import { ADD_PROPERTY, DELETE_PROPERTY, FETCH_PROPERTIES_REQUEST, FETCH_PROPERTIES_SUCCESS, FETCH_PROPERTIES_FAILURE } from '../constants/index'


// Define our State interface for the current reducer
export interface State {
    properties: Property[],
    isLoading: false,
    error: false
}

// Define our initialState
export const initialState: State = {
    properties: [], // We don't have any properties at the start of the app
    isLoading: false,
    error: false
}

/* 
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in properties reducer, action type is Action defined in actions/properties file.
 */
export function reducer(state: State = initialState, action: Action) {
    switch (action.type) {

        case ADD_PROPERTY: {

            const property = (action.payload as any).property;

            return {
                ...state,
                properties: [...state.properties, property] // Add prop
            }
        }

        case DELETE_PROPERTY: {
            const propertyId: number  = (action.payload as any).propertyId
            return {
                ...state,
                properties: state.properties.filter(prop => { prop.id !== propertyId })
            }
        }
        /** asyn action to fetch */
        case FETCH_PROPERTIES_REQUEST: {
            return Object.assign({}, state, {isLoading: true, error: false });
        }
        case FETCH_PROPERTIES_FAILURE:{
            return Object.assign({}, state,  {isLoading: false, error: true});
        }
        case FETCH_PROPERTIES_SUCCESS: {
            return Object.assign({}, state, {isLoading: false, properties: action.payload, error: false });
        }    
        default:
            return state
    }
}
