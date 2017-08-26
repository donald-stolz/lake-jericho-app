import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import HomeListItem from './List/HomeListItem'
import ClientAPI from '../Data/ClientAPI'

class Home extends Component {

  constructor(){
    super()
    // ClientAPI.clearDB()
    // ClientAPI.addClient(testClient)
    this.state = {clients : null}
  }

  componentDidMount(){
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
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h2 className="panel-title">Name
              <Link to="/NewClient" className="btn btn-default btn-xs pull-right">
                <span className="glyphicon glyphicon-plus primary"/>
              </Link>
              </h2>
            </div>
              <ul className="list-group">
                {HomeList}
              </ul>
          </div>
        </div>

    )
  }
}

export default Home;
