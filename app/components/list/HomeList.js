import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

function HomeList(props) {
  const name = props.name
  const id = props.id
  let HomeListItems;

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
    <List component="nav">
      {HomeListItems}
    </List>

    );
}

export default (HomeList);
