import * as React from 'react';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import {deepOrange300,purple500} from 'material-ui/styles/colors';

interface ToolbarProps {
}
interface ToolbarState {
    value: 3
}
const style = {margin: 5};

export default class DcsToolbar extends React.Component<ToolbarProps, ToolbarState> {

  constructor(props:ToolbarProps) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event: object, index:number, value: any) => this.setState({value});

  render() {
    return (
     <div style={{color: 'white'}}>   
      <Toolbar style={{background: 'black'}}>
          <span style={{paddingTop: 20}}>Ebay Mobile Admin</span>  
          <ToolbarGroup>
          <DropDownMenu labelStyle={{color:'white'}} value={this.state.value} onChange={this.handleChange}> 
            <MenuItem value={1} primaryText="All Broadcasts" />
            <MenuItem value={2} primaryText="All Voice" />
            <MenuItem value={3} primaryText="Admin" />
            <MenuItem value={7} primaryText="Active Text" />
          </DropDownMenu>
          <span style={{marginLeft:5}}><Avatar color={deepOrange300} backgroundColor={purple500} size={30} style={style} >A</Avatar>Hi, sarnaudova !</span>
          </ToolbarGroup>    
        </Toolbar>
      </div>
    );
  }
}
