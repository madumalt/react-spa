
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class TextBox extends React.PureComponent {
  render() {
    const { classes, label, value, helperText, onChange } = this.props;
    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-helper">{label}</InputLabel>
          <Input id="name-helper" value={value} onChange={onChange} />
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

TextBox.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
};

export default withStyles(styles)(TextBox);
