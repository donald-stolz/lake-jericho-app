import React, { Component } from 'react';

import PersonalInfo   from './Profile/PersonalInfo'
import FinancialInfo  from './Profile/FinancialInfo'
// import Account        from './Profile/Account'
//       <Account client={this.state.client}/>


class ProfilePage extends Component {
  constructor() {
    super()
    console.log(this.props.match.id);
  }

  render(){
    <div className="container-fluid">
      <PersonalInfo client={this.state.client}/>
      <FinancialInfo client={this.state.client}/>
    </div>
  }
}

export default ProfilePage;
