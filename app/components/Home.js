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

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  container: {
    marginTop: theme.spacing.unit,
    width: '100%',
  },
});

class Home extends Component{
  constructor(props){
    super(props);

    this.props.getList()
    this.state = {clients : this.props.clients};
  }

  render(){
    const { classes } = this.props;

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
        <HomeList clients={this.props.clients}/>
        </Paper>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Home);
