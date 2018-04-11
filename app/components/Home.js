import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';
import HomeList from './list/HomeList'
import Paper from 'material-ui/Paper';
import { LinearProgress } from 'material-ui/Progress';


const styles = theme => ({
  root: {
    flexGrow: 1,
		maxHeight: 750,
		overflow: 'auto'
  },
  flex: {
    flex: 1,
  },
  container: {
    marginTop: theme.spacing.unit,
    width: '100%',
  },
});

class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
			clients : [],
			loading : true
		};
  }
	componentWillMount(){
		this.props.getList()
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			clients: nextProps.clients,
			loading: false
		})
	}

  render(){
    const {classes} = this.props;
		const {loading, clients} = this.state;

		if(loading){
			return (
				<div>
					<LinearProgress size={100} />
				</div>
			);
		} else {
			return (
	      <div className={classes.root}>
	      <Paper className={classes.container} elevation={6}>
	        <AppBar position="static">
	          <Toolbar>
	            <Typography variant="title" color="inherit" className={classes.flex}>
	              Client
	            </Typography>
	            <Button color="inherit"
	              component={Link} to="/NewClient">
	              Add New
	            </Button>
	          </Toolbar>
	        </AppBar>
	        <HomeList clients={clients}/>
	        </Paper>
	      </div>
	    );
		}

  }
}

Home.propTypes = {
  classes: PropTypes.object,
};

// Home.defaultProps = {}

export default withStyles(styles)(Home);
