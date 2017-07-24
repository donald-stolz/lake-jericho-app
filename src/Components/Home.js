import React, { Component } from 'react';
import HomeListItem from './List/HomeListItem'
// import ClientAPI from '../Data/ClientAPI'

class Home extends Component {

  constructor(){
    super()

  }

  render() {
    let clientListItems;
    if (this.state.clients) {

      HomeList = this.props.clients.map(client => {
         return(
           <HomeListItem onView={this.viewClient.bind(this)} key={client._id} client={client} />
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
                  <th> Name

                    <button type="button" className="btn btn-info btn-xs">
                      <span className="glyphicon glyphicon-plus"/>
                    </button>

                  </th>
                </tr>
              </thead>
              <tbody>
                {HomeList}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
