import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      title,
      user,
      loginRequestUrl,
      logoutRequestUrl,
      showLogoutMenu,
      showMainMenu,
      onToggleLogoutMenu,
      onToggleMainMenu } = this.props;
    return (
      <div>
        <AppBar
          title={title}
          iconElementRight={
            user.authenticated
            ? <FlatButton label={user.name} onClick={onToggleLogoutMenu} />
            : <FlatButton label="Login" href={loginRequestUrl} />
          }
          onLeftIconButtonClick={user.authenticated ? onToggleMainMenu : () => {}}
        />
        {
          showMainMenu && user.authenticated ? HomeMenu(onToggleMainMenu) : ''
        }
        {
          showLogoutMenu && user.authenticated ? LogoutMenu(logoutRequestUrl, onToggleLogoutMenu) : ''
        }
      </div>
    );
  }
}


const LogoutMenuStyle = {
  paper: {
    display: 'inline-block',
    float: 'right',
  },
};

const LogoutMenu = (logoutRequestUrl, onMenuItemClick) => (
  <div>
    <Paper style={LogoutMenuStyle.paper}>
      <Menu onClick={onMenuItemClick}>
        <MenuItem primaryText="LOGOUT" href={logoutRequestUrl} />
      </Menu>
    </Paper>
  </div>
);


const HomeMenuStyle = {
  paper: {
    display: 'inline-block',
    float: 'left',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

const HomeMenu = (onMenuItemClick) => (
  <div>
    <Paper style={HomeMenuStyle.paper}>
      <Menu onClick={onMenuItemClick}>
        <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
        <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
        <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
        <Divider />
        <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
        <MenuItem primaryText="Download" leftIcon={<Download />} />
        <Divider />
        <MenuItem primaryText="Remove" leftIcon={<Delete />} />
      </Menu>
    </Paper>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  user: PropTypes.object,
  loginRequestUrl: PropTypes.string,
  logoutRequestUrl: PropTypes.string,
  showLogoutMenu: PropTypes.bool,
  showMainMenu: PropTypes.bool,
  onToggleLogoutMenu: PropTypes.func,
  onToggleMainMenu: PropTypes.func,
};

export default Header;
