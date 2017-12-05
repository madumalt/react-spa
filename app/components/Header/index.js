import React from 'react';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

export default class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {title, user, onClickUser, loginRequestUrl} = this.props;

    return (
      <AppBar
        title={title}
        iconElementRight={user.authenticated ?
          <FlatButton label={user.name} onClick={onClickUser}/> : <FlatButton href={loginRequestUrl} label='Login'/>
        }
      />
    );
  }
}
