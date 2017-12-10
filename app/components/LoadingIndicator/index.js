import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
});


class LoadingIndicator extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <CircularProgress className={classes.progress} size={50} color="accent" />
    );
  }
}

LoadingIndicator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingIndicator);
