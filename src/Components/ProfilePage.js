import React, { Component } from 'react';

import PersonalInfo   from './Profile/PersonalInfo'
import FinancialInfo  from './Profile/FinancialInfo'
// import Account        from './Profile/Account'
//       <Account client={this.state.client}/>
import ClientAPI  from '../Data/ClientAPI'

class ProfilePage extends Component {
  constructor(props) {
    super()
    console.log(props.match.params.id);
    const id = props.match.params.id
    ClientAPI.getClient(id, this.setProfile.bind(this))
    this.state = {client : null}
  }

  componentWillMount(){
    const id = this.props.match.params.id
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
