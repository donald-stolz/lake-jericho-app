import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomeListItem extends Component {

  render() {
    const name = this.props.name
    const id = this.props.id
    const path = "/Profile/" + id

    return (
          <Link className="list-group-item" to={path} >{name}</Link>
      );
  }
}

export default HomeListItem;
