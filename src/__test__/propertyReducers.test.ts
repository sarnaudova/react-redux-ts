import {reducer, State} from '../reducers/properties';
import  {Action}  from '../actions/properties';

describe('Test property reducer', () => {
    it('add property add property', () => {
        const name = "name";
        const value = "value";

        let action: Action = 
            {
                type: "ADD_PROPERTY",
                payload: {
                    property: {
                        id: 0,
                        name: name,
                        value: value,
                        description: ''
                    }
                }
            };
        

        let initialState:State = {
            properties: [],
            isLoading: false,
            error: false
        }

        const  state = reducer(initialState, action);
        expect(state).toEqual(
            { properties: [ { id: 0, name: 'name', value: 'value', description: '' } ],
            isLoading: false,
            error: false }
        );
    });
});