import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import Home  from './page/home-page';
import NotFoundPage from './page/not-found-page';

import * as injectTapEventPlugin from 'react-tap-event-plugin';

import { Provider } from 'react-redux'

//import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import App from './App';
import './index.css';
import store from './store'
import {fetchProperties} from './actions/properties';
//import routes from './routes';

// Create an enhanced history that syncs navigation events with the store
const history = createBrowserHistory();

store.dispatch(fetchProperties());

injectTapEventPlugin();

ReactDOM.render(  
  <Provider store={store}>
        <Router history={history}>
            <Switch>
              <Route exact={true} path="/" component={App} />
              <Route path="/home" component={Home} />
              <Route path="*" component={NotFoundPage} />
            </Switch> 
        </Router> 
  </Provider>,
  document.getElementById('root') as HTMLElement
);

