import Property from '../models/Property'
import PropertyApi from '../api/property-api';

import * as constants from '../constants'


  
/*
 * Define return types of property related actions 
 * Every action returns a type and a payload
 */
export interface AddPropertyAction { type: constants.ADD_PROPERTY, payload: { property: Property } }
export interface EditPropertyAction { type: constants.EDIT_PROPERTY, payload: { propertyId: number } }
export interface DeletePropertyAction { type: constants.DELETE_PROPERTY, payload: { propertyId: number } }
export interface RequestPropertiesAction {type: constants.FETCH_PROPERTIES_REQUEST}
export interface ReceivePropertiesAction {type: constants.FETCH_PROPERTIES_SUCCESS, payload: Property[]}
export interface ReceivePropertiesErrorAction {type: constants.FETCH_PROPERTIES_FAILURE, payload: string}
/**
 * Async actions to fetch all properties
 */

 // auto generate id
let nextId = 0;

/*
 * Define actions creators
 * We are returning the right Action for each function
 */
export function addProperty(name: string, value:string): AddPropertyAction {

    return {
        type: constants.ADD_PROPERTY,
        payload: {
            property: {
                id: nextId++,
                name: name,
                value: value,
                description: ''
            }
        }
    }
}

export function deleteProperty(id:number): DeletePropertyAction {
    return {
        type: constants.DELETE_PROPERTY,
        payload: {
            propertyId: id
        }
    }
}

// dispatch async action
function requestProperties() : RequestPropertiesAction {
    return {
      type: constants.FETCH_PROPERTIES_REQUEST
    }
}
function receiveProperties(properties: Property[]): ReceivePropertiesAction {
    return {
        type: constants.FETCH_PROPERTIES_SUCCESS,
        payload: properties
    }
}
function receiveErrorProperties(error: string): ReceivePropertiesErrorAction {
    return {
        type: constants.FETCH_PROPERTIES_FAILURE,
        payload: error
    }
}

export function fetchProperties() {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
  
    return function (dispatch:any) {
      // First dispatch: the app state is updated to inform
      // that the API call is starting.
  
      dispatch(requestProperties())
  
      // The function called by the thunk middleware can return a value,
      // that is passed on as the return value of the dispatch method.
  
      // In this case, we return a promise to wait for.
      // This is not required by thunk middleware, but it is convenient for us.
  
      return PropertyApi.fetch()
        .then(json =>
          // Here, we update the app state with the results of the API call.
          dispatch(receiveProperties(json))
        ).catch(error => {
          dispatch(receiveErrorProperties(error))      
        }) 
    }
}



export type Action = AddPropertyAction | DeletePropertyAction | EditPropertyAction | ReceivePropertiesAction| ReceivePropertiesErrorAction | RequestPropertiesAction