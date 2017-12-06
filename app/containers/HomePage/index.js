/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Header from 'components/Header';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectUser,
  makeSelectLoading,
  makeSelectLoginRequestUrl,
  makeSelectLogoutRequestUrl,
  makeSelectShowHomeMenu,
  makeSelectShowLogoutMenu,
} from './selectors';
import {
  toggleHomeMenu,
  toggleLogoutMenu,
} from './actions';
import {
  HOME,
} from './constants';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      user,
      loginRequestUrl,
      logoutRequestUrl,
      showHomeMenu,
      showLogoutMenu,
      onToggleHomeMenu,
      onToggleLogoutMenu } = this.props;
    return (
      <div>
        <Header
          title="Mobile Shop"
          user={user}
          loginRequestUrl={loginRequestUrl}
          logoutRequestUrl={logoutRequestUrl}
          showMainMenu={showHomeMenu}
          showLogoutMenu={showLogoutMenu}
          onToggleLogoutMenu={onToggleLogoutMenu}
          onToggleMainMenu={onToggleHomeMenu}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  user: PropTypes.object,
  loginRequestUrl: PropTypes.string,
  logoutRequestUrl: PropTypes.string,
  showHomeMenu: PropTypes.bool,
  showLogoutMenu: PropTypes.bool,
  onToggleHomeMenu: PropTypes.func,
  onToggleLogoutMenu: PropTypes.func,
};

const mapDispatchToProps = (dispatch) =>
  ({
    onToggleHomeMenu: () => dispatch(toggleHomeMenu()),
    onToggleLogoutMenu: () => dispatch(toggleLogoutMenu()),
  });


const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  loading: makeSelectLoading(),
  loginRequestUrl: makeSelectLoginRequestUrl(),
  logoutRequestUrl: makeSelectLogoutRequestUrl(),
  showHomeMenu: makeSelectShowHomeMenu(),
  showLogoutMenu: makeSelectShowLogoutMenu(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: HOME, reducer });
const withSaga = injectSaga({ key: HOME, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
