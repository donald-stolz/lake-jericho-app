import React, { Component } from 'react';

import PersonalInfo   from './Profile/PersonalInfo'
import FinancialInfo  from './Profile/FinancialInfo'
import Account        from './Profile/Account'



class ProfilePage extends Component {
  constructor() {
    super()
    console.log(this.props.match.id);
  }

  render(){

  }
}

export default ProfilePage;
