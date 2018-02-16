import * as React from 'react';
import Properties from '../containers/Properties';
// import PropertiesList from '../components/PropertiesList';
// import Property from '../models/Property';
// import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'

describe ('<Properties/>', ()=>{
    
    const initialState = {
        properties:[{
            id: 1,
            name: "prop1",
            value: "value1",
            description: "descr"
        }]
    };
    const mockStore = configureStore();
    let store = {};
    beforeEach(()=>{
        store = mockStore(initialState)
    })
    it('render the connected component', () => {
       const container = shallow(<Properties store={store}/> );
       expect(container.length).toEqual(1);
    });

    // it('capturing Snapshot of Properties', () => {
    //     let properties: Property[];
    //     properties = [];
    //     properties.push({
    //         id: 1,
    //         name: "prop1",
    //         value: "value1",
    //         description: "descr"
    //     });
    //     const renderedValue =  renderer.create(<PropertiesList properties={properties} onAddProperty={()=>console.log('test')}/>).toJSON();
    //     expect(renderedValue).toMatchSnapshot();
    // });
    
});
