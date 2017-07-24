import React, { Component } from 'react';
import ClientListItem from './List/ClientListItem'
import ClientAPI from './Data/ClientAPI'

class Home extends Component {

  constructor(){
    super()
  }

  render() {
    let clientListItems;
    if (this.state.clients) {
      // JavaScript variable for storing jsx listItem objects
      clientListItems = this.props.clients.map(client => {
         return(
           <ClientListItem onView={this.viewClient.bind(this)} key={client.name} client={client} />
          )
        });
      }
    return(
      <div className="Clients">
      <h1> Clients </h1>
      <div className="row">
      <div className="col-lg-12 col-sm-4">
        <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Check Profile</th>
              </tr>
            </thead>
            <tbody>
              {clientListItems}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    )
  }
}

export default Home;
