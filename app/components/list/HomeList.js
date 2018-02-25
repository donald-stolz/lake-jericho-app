import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';


const styles = theme => ({
  root: {
    paddingTop: 2,
    paddingBottom: 2,
    // marginTop: theme.spacing.unit,
    width: '100%',
  },
});

function HomeList(props) {
  const name = props.name
  const id = props.id
  let HomeListItems;
  const { classes } = props;

  const clients = props.clients;
  if (clients) {
    HomeListItems = clients.map(client => {
      const path = "/Profile/" + client._id
       return(
         <ListItem button key={client._id}
         component={Link} to={path}>
           <ListItemText primary={client.personal.name}/>
         </ListItem>
        )
      });
    }

  return (
    <Paper className={classes.root} elevation={4}>
    <List component="nav">
      {HomeListItems}
    </List>
    </Paper>
    );
}

export default withStyles(styles)(HomeList);
