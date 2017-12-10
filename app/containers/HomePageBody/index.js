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
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TabBox from 'components/TabBox';
import TextBox from 'components/TextBox';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import {
  changeResourceName,
  invokeBackEndAPI,
  invokeUserInfoAPI,
} from './actions';
import {
  makeSelectResourceName,
  makeSelectBackEndAPIResponse,
  makeSelectUserInfoResponse,
} from './selector';
import {
  HOME_PAGE_BODY,
} from './constants';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 16,
    color: theme.palette.text.primary,
  },
});

class HomePageBody extends React.PureComponent {  // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      classes,
      resourceName,
      backEndAPIResponse,
      userInfoResponse,
      onChangeResourceName,
      invokeBackEndAPI,
      invokeUserInfoAPI,} = this.props;
    return (
      <Grid container spacing={12} className={classes.root}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TextBox
              label="resource name:"
              value={resourceName}
              helperText="Enter a resource name to be requested at dummy API."
              onChange={onChangeResourceName}
            />
            <TabBox
              tabName="Invoke Back End API"
              onTabClick={() => invokeBackEndAPI(resourceName)}
              json={backEndAPIResponse}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TabBox
              tabName="Invoke UserInfo API"
              onTabClick={invokeUserInfoAPI}
              json={userInfoResponse}
            />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

HomePageBody.propTypes = {
  classes: PropTypes.object.isRequired,
  resourceName: PropTypes.string,
  backEndAPIResponse: PropTypes.object,
  userInfoResponse: PropTypes.object,
  onChangeResourceName: PropTypes.func,
  invokeBackEndAPI: PropTypes.func,
  invokeUserInfoAPI: PropTypes.func,
};

const mapDispatchToProps = (dispatch) =>
  ({
    onChangeResourceName: (event) => dispatch(changeResourceName(event.target.value)),
    invokeBackEndAPI: (resourceName) => dispatch(invokeBackEndAPI(resourceName)),
    invokeUserInfoAPI: () => dispatch(invokeUserInfoAPI()),
  });


const mapStateToProps = createStructuredSelector({
  resourceName: makeSelectResourceName(),
  backEndAPIResponse: makeSelectBackEndAPIResponse(),
  userInfoResponse: makeSelectUserInfoResponse(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: HOME_PAGE_BODY, reducer});
const withSaga = injectSaga({key: HOME_PAGE_BODY, saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(withStyles(styles)(HomePageBody));
