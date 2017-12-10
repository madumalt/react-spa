
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import JSONPretty from 'react-json-pretty';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    backgroundColor: theme.palette.background.appBar,
  },
  prettyJsdonDiv: {
    'max-height': 'inherit'
  }
});

class TabBox extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes, json, tabName, onTabClick } = this.props;
    return (
      <div className={classes.root} >
        <Tabs
          value={0}
          indicatorColor="secondary"
          textColor="primary"
          centered
          className={classes.tabs}
        >
          <Tab value={0} label={tabName} onClick={onTabClick}/>
        </Tabs>
        {
          json.size <= 0 ?
            <h4 style={{textAlign:'center'}}>Click the Tab to Invoke the API</h4>
            : (<div ><JSONPretty className={classes.prettyJsdonDiv} json={json} /></div>)
        }
      </div>
    );
  }
}

TabBox.propTypes = {
  classes: PropTypes.object.isRequired,
  tabName: PropTypes.string.isRequired,
  onTabClick: PropTypes.func,
};

export default withStyles(styles)(TabBox);

