import * as React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const names = [
    '5.8.0',
    '5.6.0',
    '5.6.1',
    '5.4.0',
    '5.4.3',
    '5.3.9',
];

export default class DcsMultiSelect extends React.Component<{}, {}> {
    state = {
        values: [],
      };
    
      handleChange = (event:object, index:number, values:any) => this.setState({values});
    
      menuItems(values:any) {
        return names.map((name) => (
          <MenuItem
            key={name}
            insetChildren={true}
            checked={values && values.indexOf(name) > -1}
            value={name}
            primaryText={name}
          />
        ));
      }
    
      render() {
        const {values} = this.state;
        return (
          <SelectField
            multiple={true}
            hintText="Select a name"
            value={values}
            onChange={this.handleChange}
          >
            {this.menuItems(values)}
          </SelectField>
        );
      }
    }
    
