import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomeListItem extends Component {

// TODO: Pass id on click to view correct "ClientProfile"

//Format client item and bind event listeners
  render() {
    const name = this.props.client.name
    const id = this.props.client._id
    const path = "/Profile/" + id

    return (
          <Link className="list-group-item" to={path} >{name}</Link>

      );
  }
}

export default HomeListItem;
