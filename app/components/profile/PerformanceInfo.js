import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import SimpleSelect from '../common/SimpleSelect'
import AddIcon from 'material-ui-icons/Add';
import PerformanceForm from '../form/PerformanceForm'
import Grid from 'material-ui/Grid';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
		width: '100%',
  },
	flex: {
		flex: 1,
	},
  list:{
		paddingLeft: theme.spacing.unit * 2,
		minWidth: 300,
		maxWidth: 500
	},
	textField: {
		margin: theme.spacing.unit,
		paddingBottom: 2,
		flexWrap: 'wrap',
		width: '100%',
	},
});

class PerformanceInfo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			newRecord : false,
			editRecord: false,
			index : 0,
			record: this.props.performance[0]
		}
	}

	handleChange = target => {
		var performance = {...this.state.record, [target.id]:target.value}
		this.setState({record : performance})
	};

	recordSelect(selected){
		const {performance} = this.props
		var index = -1
		for (var i=0; i < performance.length; i++) {
        if (performance[i].date === selected.value) {
            index = i;
        }
    }
		this.setState({
			index,
			record: performance[index]
		});
	}

	editPerformance = () => {this.setState({editRecord: true})}

	newPerformance(){
		// TODO: Add day here
		const lastIndex = this.props.performance.length - 1;
		const lastPerform = this.props.performance[lastIndex];
		var regex = /\s*\/\s*/;
    var values = lastPerform.date.split(regex);
		var year = values[1];
		var month = values[0];

		month = parseInt(month) + 1;
		if (month < 10) {
			month = "0"+ month.toString();
		} else if (month > 12) {
			month = "01";
			year = (parseInt(year) + 1).toString();
		}else {
			month = month.toString();
		}
		var nextDate = month + "/" + year
		var nextPerform = {...lastPerform, date: nextDate}
		this.setState({
			record: nextPerform,
			newRecord: true})
	}

	save(){
		// Update account details or add new performance record
		const {record, index, newRecord} = this.state;
		var {performance} = this.props;
		if (newRecord) {
			performance.push(record);
		}else {
			performance[index] = record;
		}
		this.props.handleChange(performance);
		this.cancel();
	}

	cancel(){
		this.setState({
			newRecord: false,
			editRecord: false
		})
	}

	componentWillReceiveProps(nextProps){ this.setState({index: 0});}

	render(){
		const { newRecord, editRecord, index, record } = this.state;
		const {classes, performance } = this.props;
		const select = this.recordSelect.bind(this);
		const edit = this.editPerformance.bind(this);
		const dates = performance.map((record) => {return record.date});
		const handleChange = this.handleChange.bind(this);

		const buttons = (
			<Grid container className={classes.buttonBar} justify={'space-around'}>
				<Grid item>
					<Button
							onClick={this.cancel.bind(this)}
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
		)

		if (newRecord) {
			return (
				<div>
				<PerformanceForm
					handleChange={handleChange}
					newRecord={true}
					pastPerformance={record}/>
				{buttons}
				</div>
			)
		}
		else if (editRecord) {
			return(
				<div>
					<PerformanceForm
						handleChange={handleChange}
						newRecord={false}
						pastPerformance={performance[this.state.index]}/>
					{buttons}
				</div>)
		}
		else {
			return(
				<div className={classes.root}>
  			<Paper className={classes.container} elevation={6}>
          <AppBar className={classes.container} position="static" color="primary" >
  			    <Toolbar>
  			      <Typography variant="title" color="inherit" className={classes.flex}>
  			        Performance History
  			      </Typography>
							<Button color="inherit"
								onClick={edit}>
								Edit
							</Button>
							<Button color="default" variant="fab"
								onClick={this.newPerformance.bind(this)}>
								<AddIcon size={"small"}/>
							</Button>
  			    </Toolbar>
  			  </AppBar>

					<List component="nav" className={classes.list}>
						<SimpleSelect label="Date"
							id="date"
							value={record.date}
							menu={dates}
							handleChange={select}/>
						<TextField label="Tax" value={performance[index].tax} id={'tax'} disabled className={classes.textField}/>
						<TextField label="Horizon" value={performance[index].horizon} id={'horizon'}disabled className={classes.textField}/>
						<TextField label="Bias" value={performance[index].bias} id={'bias'} disabled className={classes.textField}/>
	          <TextField label="Begin Balance" value={"$ "+performance[index].beginBal} id={'beginBal'} startadornment={"$"} disabled className={classes.textField}/>
	          <TextField label="End Balance" value={"$ "+performance[index].endBal} id={'endBal'} startadornment={"$"} disabled className={classes.textField}/>
	          <TextField label="Net Return" value={performance[index].netReturn+" %"} id={'netReturn'} startadornment={"%"} disabled className={classes.textField}/>
					</List>
				</Paper>
			</div>)
		}
	}
}

PerformanceInfo.propTypes = {
	classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
	performance: PropTypes.arrayOf(PropTypes.shape({
		date: PropTypes.string.isRequired,
		tax: PropTypes.string.isRequired,
		horizon: PropTypes.string.isRequired,
		bias: PropTypes.string.isRequired,
		beginBal: PropTypes.string.isRequired,
		endBal: PropTypes.string.isRequired,
		netReturn: PropTypes.string.isRequired
	})).isRequired
}

PerformanceInfo.defaultProps = {
  handleChange: (event) => {console.log(event)},
	performance : [{
		date: '01/14',
		tax: ' ',
		horizon: ' ',
		bias: ' ',
		beginBal: '0',
		endBal: '0',
		netReturn: '0'
	}]
}

export default withStyles(styles)(PerformanceInfo)
