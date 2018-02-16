import * as React from 'react';
//import AutoComplete from 'material-ui/AutoComplete';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import MultiSelect from '../components/MultiSelect';
import Table from '../components/Table';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
interface Props {
    onAddProperty: () => void
}
interface State {
    dataSource: [string]
}
export default class DcsContent extends React.Component<Props, State> {
    // state = {
    //     dataSource: [],
    //     versions: []
    // };
    
    // handleUpdateInput = (value: any) => {
    //     this.setState({
    //         dataSource: [
    //             value,
    //             value + value,
    //             value + value + value,
    //         ],
    //     });
    // };
    constructor(props: Props) {
        super(props)
      }
      
    render() {
        return (

            <div>
                <div style={{padding:20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                
                            {/* <AutoComplete
                                hintText="Application name"
                                dataSource={this.state.dataSource}
                               // onUpdateInput={this.handleUpdateInput}
                            /> */}
                            <span style={{margin:20}}>Show versions:</span>
                            <RadioButtonGroup name="test" style={{display: 'flex', flexDirection:'row', width: 200, justifyContent: 'space-between'}}>
                                <RadioButton value="1" label="Last 3" style={{display: 'inline-block'}} />
                                <RadioButton value="2" label="All" style={{display: 'inline-block'}} />
                            </RadioButtonGroup>
                            <div>
                            <MultiSelect/>
                            </div>
                            <RaisedButton label="OK" primary={true} />
                
                    </div>
               
                <div style={{paddingTop: 20}}>
                
                <IconButton tooltip="Add Property" onClick={()=>this.props.onAddProperty()}>    
                    <SvgIcon width="24" height="24" viewBox="0 0 24 24">
                    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </SvgIcon>
                </IconButton>
                <span>Add new properties</span>
                <IconButton tooltip="Remove Property">    
                    <SvgIcon width="24" height="24" viewBox="0 0 24 24">
                    <path d="M2 12.88V16h3.12L14 7.12 10.88 4 2 12.88zm14.76-8.51c.33-.33.33-.85 0-1.18l-1.95-1.95c-.33-.33-.85-.33-1.18 0L12 2.88 15.12 6l1.64-1.63z"/>  
                    </SvgIcon>
                </IconButton>
                <span> Edit property value </span>  
                <IconButton tooltip="Remove Property">    
                    <SvgIcon width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </SvgIcon>
                </IconButton>
                <span>Remove property</span>
                
                </div> 

                <div style={{paddingTop:20}}>
                    <Table/>
                </div>
            </div>
        );
    }
}    