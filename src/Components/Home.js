import React, { Component } from 'react';
import HomeListItem from './List/HomeListItem'
import ClientAPI from '../Data/ClientAPI'


class Home extends Component {

  constructor(){
    super()

    this.state = {clients : null}
  }

  componentWillMount(){
    ClientAPI.setIndex(this.setList.bind(this))
  }

  setList(list){
    this.setState({clients : list})
  }

  render() {
    let HomeList;
    if (this.state.clients) {

      HomeList = this.state.clients.map(client => {
         return(
           <HomeListItem key={client._id} client={client} />
          )
        });
      }
    return(
      <div className="container-fluid">
        <h1> Clients </h1>
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-striped">
              <thead>
                <tr>
                  <th> Name

                    <button type="button" className="btn btn-info btn-xs pull-right">
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
