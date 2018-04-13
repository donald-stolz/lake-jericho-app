// NOTE: Should check in parent wether to have enabled right
// i.e. enabled={this.state.buttonEnable}
// Button is rendered as disabled until all data contains values
// TODO Create global button component
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
		flex: 1,
		height: '100vh',
		overflow: 'auto'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  buttonBar: {
    paddingTop: 5,
    paddingBottom: 10
  },
});

class ButtonBar extends React.Component {
	constructor(props) {
		super(props);
		// this.state={}
	}

	render() {

		const { classes, leftBtnText, leftDisable, leftOnClick,
						rightBtnText, rightDisable, rightOnClick} = this.props;
// NOTE: Change link component to a history.push function
		return(
			<Grid container className={classes.buttonBar} justify={'space-around'}>
				<Grid item>
					<Button
							onClick={leftOnClick.bind(this)}
							size="large"
							variant="raised"
							color="secondary"
							className={classes.button}
							disabled={leftDisable}>
						{leftBtnText}
					</Button>
				</Grid>
				<Grid item>
				<Button
						onClick={rightOnClick.bind(this)}
						size="large"
						variant="raised"
						color="primary"
						className={classes.button}
						disabled={rightDisable}>
					{rightBtnText}
				</Button>
				</Grid>
			</Grid>)
	}
}

ButtonBar.propTypes = {
	classes: 				PropTypes.object.isRequired,
	leftBtnText: 		PropTypes.string.isRequired,
	leftOnClick:		PropTypes.func.isRequired,
	leftDisable:	PropTypes.bool.isRequired,
	rightBtnText: 	PropTypes.string.isRequired,
	rightOnClick:		PropTypes.func.isRequired,
	rightDisable:	PropTypes.bool.isRequired,
}

ButtonBar.defaultProps = {
	leftBtnText: 'Cancel',
	leftOnClick:	(event) => {console.log(event);},
	leftDisable: false,
	rightBtnText: 'Save',
	rightOnClick:	(event) => {console.log(event);},
	rightDisable: true,
}

export default withStyles(styles)(ButtonBar);
