import { State } from '../reducers'
/**
 * Get all properties from root state.
 * @param state 
 */
export function getProperties(state: State) {
  return state.properties;
}

export function getProperty(state: State, id: number) {
  return state.properties[id];
}
