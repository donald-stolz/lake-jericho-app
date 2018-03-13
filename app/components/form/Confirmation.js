import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styles = theme => ({
	container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
		width: '100%',
  },
});

function Confirmation(props) {
  const { classes, handleAccount, handleSubmit } = props;
  return (
		<Grid container alignContent={'center'} alignItems={'center'}>
      <Button
				variant="raised"
				color="default"
				className={classes.button}
				onClick={handleAccount.bind(this)}>
        Add Another Account
      </Button>
      <Button
				variant="raised"
				color="primary"
				className={classes.button}
				onClick={handleSubmit.bind(this)}
				component={Link} to="/">
        Save to Database
      </Button>
		</Grid>
  );
}

Confirmation.propTypes = {
  classes: PropTypes.object.isRequired,
	handleAccount: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

Confirmation.defaultProps = {
  handleAccount: (event) => {console.log(event)},
	handleSubmit: (event) => {console.log(event)},
}

export default withStyles(styles)(Confirmation);
