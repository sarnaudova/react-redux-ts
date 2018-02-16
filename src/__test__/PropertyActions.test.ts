import * as actions from '../actions/properties';
describe('Test properties actions', () => {
    it('add property add property', () => {
        const name = "prop1";
        const value = "value1";

        const add = actions.addProperty(name, value);
        expect(add).toEqual(
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
            })
    });
});