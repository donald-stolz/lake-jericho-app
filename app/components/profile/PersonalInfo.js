import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';
import LabeledInput from '../common/LabeledInput';
import PhoneInput from '../common/PhoneInput'
import DatePicker from '../common/DatePicker'
import Grid from 'material-ui/Grid';
import PersonalForm from '../form/PersonalForm'
import TextField from 'material-ui/TextField';
import Input from 'material-ui/Input';


const styles = theme => ({
  root: {
		flex: 1,
  },
	flex: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
		width: '100%',

  },
  list:{
		paddingLeft: theme.spacing.unit * 2,
		minWidth: 300,
		maxWidth: 400
	},
	textField: {
		margin: theme.spacing.unit,
		paddingBottom: 2,
		flexWrap: 'wrap',
		width: '100%',
	},
	buttonBar: {
		paddingTop: 5,
		paddingBottom: 10
	},
});

class PersonalInfo extends Component {
  constructor(props){
    super(props)

    this.state = {
			viewing: true,
			client: this.props.client
		}
  }

// TODO: Button Events
	handleChange = target => {
		var clientUpdate = {...this.state.client, [target.id]:target.value}
		this.setState({client : clientUpdate})
	};

	changeEdit(){
		this.setState({viewing : !this.state.viewing})
	}

	save(){
		this.props.handleChange(this.state.client);
		this.changeEdit();
	}

	renderViewOrEdit(){
		const { classes, client } = this.props;
		const inputChange = this.handleChange.bind(this);

		if (this.state.viewing) {
			return(
				<div className={classes.root}>
					<Paper className={classes.container} elevation={6}>
						<AppBar className={classes.container} position="static" color="primary" >
							<Toolbar>
								<Typography variant="title" color="inherit" className={classes.flex}>
									Personal Information
								</Typography>
								<Button color="inherit"
		              onClick={this.changeEdit.bind(this)} to="/NewClient">
		              Edit
		            </Button>
							</Toolbar>
						</AppBar>
						<List component="nav" className={classes.list}>
							<TextField disabled value={client.name} label="Name" disabled className={classes.textField}/>
							<TextField disabled value={client.dob} label="Date of Birth" disabled className={classes.textField}/>
							<TextField disabled value={client.address} label="Address" disabled className={classes.textField}/>
							<TextField disabled value={client.phone} label="Phone Number"disabled className={classes.textField}/>
							<TextField disabled value={client.email} label="Email" disabled className={classes.textField}/>
						</List>
					</Paper>
				</div>
			)
		} else {
			return (
				<div>
					<PersonalForm client={client} handleChange={inputChange}/>
					<Grid container className={classes.buttonBar} justify={'space-around'}>
						<Grid item>
							<Button
									onClick={this.changeEdit.bind(this)}
									size="large"
									variant="raised"
									color="secondary"
									className={classes.button}>
								Cancel
							</Button>
						</Grid>
						<Grid item>
							<Button
									onClick={this.save.bind(this)}
									size="large"
									variant="raised"
									color="primary"
									className={classes.button}
									>
								Save
							</Button>
						 </Grid>
					</Grid>
				</div>);
		}
	}

  render(){
		return(
			<div>
			{this.renderViewOrEdit()}
	  </div>
	)
	}
}

PersonalInfo.defaultProps = {
	classes: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	client: PropTypes.object.isRequired
}


PersonalInfo.propTypes = {
	handleChange: (event) => {console.log(event)},
}

export default withStyles(styles)(PersonalInfo)
