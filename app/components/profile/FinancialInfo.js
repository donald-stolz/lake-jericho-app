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
import Grid from 'material-ui/Grid';
import FinancialForm from '../form/FinancialForm'
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

class FinancialInfo extends Component {
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
		console.log(clientUpdate);
		this.setState({client : clientUpdate})
	};

	changeEdit(){
		this.setState({viewing : !this.state.viewing})
	}

	save(){
		console.log(this.state.client);
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
									Financial Information
								</Typography>
								<Button color="inherit"
		              onClick={this.changeEdit.bind(this)} to="/NewClient">
		              Edit
		            </Button>
							</Toolbar>
						</AppBar>
						<List component="nav" className={classes.list}>
							<TextField disabled value={"$" + client.annualIncome} label="Annual Income" disabled className={classes.textField}/>
							<TextField disabled value={"$" + client.totalAssets} label="Total Assets" disabled className={classes.textField}/>
							<TextField disabled value={"$" + client.liquidAssets} label="Liquid Assets" disabled className={classes.textField}/>
							<TextField disabled value={"$" + client.investmentAssets} label="Investment Assets"disabled className={classes.textField}/>
							<TextField disabled value={client.investmentExperience} label="Investment Experience" disabled className={classes.textField}/>
							<TextField disabled value={client.overallObjectives} label="Overall Objectives"disabled className={classes.textField}/>
							<TextField disabled value={client.timeHorizon} label="Time Horizon" disabled className={classes.textField}/>
							<TextField disabled value={client.taxConsids} label="Tax Considerations" disabled className={classes.textField}/>
							<TextField disabled value={client.liquidConsids} label="Liquid Considerations" disabled className={classes.textField}/>
							<TextField disabled value={client.regulatoryIssues} label="Regulatory Issues" disabled className={classes.textField}/>
							<TextField disabled value={client.unique} label={"Unique"} id='unique' disabled className={classes.textField}/>
							<TextField disabled value={client.returnObjectives} label="Return Objectives" disabled className={classes.textField}/>
							<TextField disabled value={client.riskAbility} label="Ability" disabled className={classes.textField}/>
							<TextField disabled value={client.riskWillingness} label="Willingness" disabled className={classes.textField}/>
							<TextField disabled value={client.riskOverallAbility} label="Overall" disabled className={classes.textField}/>
						</List>
					</Paper>
				</div>
			)
		} else {
			return (
				<div>
					<FinancialForm client={client} handleChange={inputChange}/>
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
		  </div>)
	}
}

FinancialInfo.defaultProps = {
	classes: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	client: PropTypes.object.isRequired,
}


FinancialInfo.propTypes = {
	handleChange: (event) => {console.log(event);},
}

export default withStyles(styles)(FinancialInfo)
