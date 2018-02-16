import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toolbar from './layout/Toolbar';
import Content from './containers/Content';
import './App.css';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

const AppbarStyles = () => getMuiTheme({
  palette: {
    primary1Color: '#f4511e'
  }
});

class App extends React.Component<{},{}> {
    
  render() {
    return (
      <MuiThemeProvider  muiTheme={AppbarStyles()}>
        <Toolbar />
        <Content />
      </MuiThemeProvider>
    );
  }
}

export default App;
