import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import HomeListItem from './List/HomeListItem'
import ClientAPI from '../Data/ClientAPI'

// var testClient = {
//     // Personal Information
//       name: 'Test',
//       dob: '',
//       address: 'Lorem Ipsum',
//       phone: 'Lorem Ipsum',
//       email: 'Lorem Ipsum',
//
//     // Financial Information
//       annualIncome: 0,
//       totalAssets: 'Lorem Ipsum',
//       liquidAssets: 'Lorem Ipsum',
//       investmentAssets: 'Lorem Ipsum',
//       investmentExperience: 'Lorem Ipsum',
//       investmentObjectives: 'Lorem Ipsum',
//       numAccounts: 0,
//
//       accounts : [{
//         accNum: 0,
//         accName: 'Name 1',
//         startBal: '123',
//         startDate: '2017-07',
//         tax: 'Taxable',
//         horizon: 'Taxable',
//         bias: 'Growth',
//         performanceHist : [{
//           beginBal: "100",
//           bias : "Growth",
//           date : "2017-06",
//           endBal : "123",
//           horizon : "Short",
//           netReturn : 23,
//           tax : "Taxable"
//         },{
//           beginBal: "200",
//           bias : "Aggregation",
//           date : "2017-09",
//           endBal : "123",
//           horizon : "Intermediate",
//           netReturn : 23,
//           tax : "Taxable"
//         },{
//           beginBal: "400",
//           bias : "Aggregation",
//           date : "2017-10",
//           endBal : "123",
//           horizon : "Short",
//           netReturn : 23,
//           tax : "Taxable"
//         }]
//     }]
//   }


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
