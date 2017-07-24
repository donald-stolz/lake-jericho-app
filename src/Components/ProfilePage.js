import React, { Component } from 'react';

import PersonalInfo   from './Profile/PersonalInfo'
import FinancialInfo  from './Profile/FinancialInfo'
// import Account        from './Profile/Account'
//       <Account client={this.state.client}/>
import ClientAPI  from '../Data/ClientAPI'

class ProfilePage extends Component {
  constructor(props) {
    super()

    this.state = {client : {
        // Personal Information
          name: '',
          dob: '',
          address: '',
          phone: '',
          email: '',

        // Financial Information
          annualIncome: 0,
          totalAssets: '',
          liquidAssets: '',
          investmentAssets: '',
          investmentExperience: '',
          investmentObjectives: '',
          numAccounts: 0,

          accounts : [{
            accNum: 0,
            accName: '',
            startBal: '',
            startDate: '',
            tax: '',
            horizon: '',
            bias: '',
            performanceHist : [{
              date: '',
              tax: '',
              horizon: '',
              bias: '',
              beginBal: 0,
              endBal: 0,
              netReturn: 0
            }]
          }]

      }
    }
  }

  componentWillMount(){
    const id = this.props.match.params.id
    console.log(id);
    ClientAPI.getClient(id, this.setProfile.bind(this))
  }

  setProfile(data){
    this.setState({client : data})
  }

  render(){
    return(
    <div className="container-fluid">
      <PersonalInfo client={this.state.client}/>
      <FinancialInfo client={this.state.client}/>
    </div>
  )}
}

export default ProfilePage;
