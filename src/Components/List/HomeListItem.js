import React, { Component } from 'react';

class HomeListItem extends Component {

// TODO: Pass id on click to view correct "ClientProfile"
  viewClient(name){
    this.props.onView(name);
  }

//Format client item and bind event listeners
  render() {
    return (
        <tr>
          <td className="text-left">{this.props.client.name}</td>
          <td className="text-left"><a href="#" onClick={this.viewClient.bind(this, this.props.client.name)}>View</a></td>
        </tr>
      );
  }
}

export default HomeListItem;
