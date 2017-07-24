import React, { Component } from 'react';

import PersonalInfo   from './Profile/PersonalInfo'
import FinancialInfo  from './Profile/FinancialInfo'
import Account        from './Profile/Account'

//       <Account client={this.state.account[active]}/>
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

      },
      activeAcc : 0
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
    const client    = this.state.client
    const accounts  = this.state.accounts
    const active    = this.state.activeAcc
    return(
    <div className="container-fluid">
      <PersonalInfo client={client}/>
      <FinancialInfo client={client}/>
       <Account client={this.state.account[active]}/>
    </div>
  )}
}

export default ProfilePage;
