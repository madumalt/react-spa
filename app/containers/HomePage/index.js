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
import { makeSelectUser, makeSelectLoading, makeSelecetLoginRequestUrl } from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  HOME,
} from './constants';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { user, onClickUser, loginRequestUrl } = this.props;
    return (
      <div>
        <Header
          title="Mobile Shop"
          user={user}
          loginRequestUrl={loginRequestUrl}
          onClickUser={onClickUser}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  user: PropTypes.object,
  loginRequestUrl: PropTypes.string,
  onClickUser: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => // eslint-disable-line no-unused-vars
  ({
    onClickUser: () => console.log('onClickUser'),
  });


const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  loading: makeSelectLoading(),
  loginRequestUrl: makeSelecetLoginRequestUrl(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: HOME, reducer });
const withSaga = injectSaga({ key: HOME, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
