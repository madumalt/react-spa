/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import reducer from './reducer';
import {
  APP,
} from './constants';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

const withReducer = injectReducer({ key: APP, reducer });

export default compose(
  withReducer,
)(App);
