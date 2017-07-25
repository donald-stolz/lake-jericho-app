import React, { Component } from 'react';

class AccountListItem extends Component {

  setAccount(e){
    e.preventDefault()
    const accNum = this.props.account.accNum
    this.props.setAcc(accNum)
  }

  render(){
    const name = this.props.account.accName
    console.log(this.props);
    return (
      <li>
        <a className="btn" onClick={this.setAccount.bind(this)}> {name}</a>
      </li>
      );
  }
}

export default AccountListItem;
