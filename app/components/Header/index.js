import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, user, loginRequestUrl, onClickUser } = this.props;

    return (
      <AppBar
        title={title}
        iconElementRight={user.authenticated ? <FlatButton label={user.name} onClick={onClickUser} />
          : <FlatButton href={loginRequestUrl} label="Login" />
        }
      />
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  user: PropTypes.object,
  loginRequestUrl: PropTypes.string,
  onClickUser: PropTypes.func,
};

export default Header;
