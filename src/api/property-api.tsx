import Property from '../models/Property';

class PropertyApi {

    /**
     * Return list of all properties.
     */
    fetch() : Promise <Property[]> {
        return new Promise((resolve, reject) => {
            let properties: Array<Property> = [];
            for (let i=0; i<10; i++) {
                let property: Property = {id: i, name: 'prop_name_' + i, value: 'prop_value_'+ i, description: ''};
                properties.push(property);
            }
            resolve(properties);
        });
    }
}
export default new PropertyApi();
