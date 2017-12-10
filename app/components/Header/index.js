import React from 'react';
import PropTypes from 'prop-types';

import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper'
import {MenuItem, MenuList} from 'material-ui/Menu';
import Grow from 'material-ui/transitions/Grow';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import {Manager, Target, Popper} from 'react-popper';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      classes,
      title,
      user,
      loginRequestUrl,
      logoutRequestUrl,
      showLogoutMenu,
      showMainMenu,
      onToggleLogoutMenu,
      onToggleMainMenu
    } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon onClick={onToggleMainMenu}/>
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              {title}
            </Typography>
            {user.authenticated ?
              (<Manager>
                <Target>
                  <Button color="contrast" onClick={onToggleLogoutMenu}>{user.name}</Button>
                </Target>
                <Popper placement="bottom-start" eventsEnabled={user.authenticated && showLogoutMenu}>
                  <Grow
                    in={user.authenticated && showLogoutMenu}
                    id="menu-list"
                    style={{transformOrigin: '0 0 0'}}>
                    <Paper>
                      <MenuList role="menu">
                        <MenuItem onClick={onToggleLogoutMenu}>Profile</MenuItem>
                        <MenuItem onClick={onToggleLogoutMenu}>My account</MenuItem>
                        <Divider light/>
                        <a href={logoutRequestUrl}>
                          <MenuItem onClick={onToggleLogoutMenu}>Logout</MenuItem>
                        </a>
                      </MenuList>
                    </Paper>
                  </Grow>
                </Popper>
              </Manager>)
              :
              <Button color="contrast" href={loginRequestUrl}>LOGIN</Button>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  user: PropTypes.object,
  loginRequestUrl: PropTypes.string,
  logoutRequestUrl: PropTypes.string,
  showLogoutMenu: PropTypes.bool,
  showMainMenu: PropTypes.bool,
  onToggleLogoutMenu: PropTypes.func,
  onToggleMainMenu: PropTypes.func,
};

export default withStyles(styles)(Header);
