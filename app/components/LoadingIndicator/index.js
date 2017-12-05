import React from 'react';

import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

export default class LoadinIndicator extends React.PureComponent { // eslint-disable-line
// react/prefer-stateless-function
  render() {
    return (
        <RefreshIndicator
          size={50}
          left={70}
          top={0}
          loadingColor="#FF9800"
          status="loading"
          style={style.refresh}
        />
    );
  }
}
