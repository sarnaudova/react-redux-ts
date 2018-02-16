import PropertiesList from '../components/PropertiesList';
import * as actions from '../actions/properties';
import { connect, Dispatch } from 'react-redux';
import { State } from '../reducers';
import {getProperties} from  '../selectors/properties';


export function mapStateToProps(state: State) {
    return getProperties(state)
  }

export function mapDispatchToProps(dispatch: Dispatch<actions.Action>) {
  
    return {
        onAddProperty: () => {
           dispatch(actions.addProperty('test', 'test')); // dispatch add property 
        }
    }
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(PropertiesList)
