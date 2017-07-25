import React, { Component } from 'react';

class AccountListItem extends Component {

  setAccount(e){
    e.preventDefault()
    const accNum = this.props.account.accNum
    this.props.setAcc(accNum)
  }

  render(){
    const name = this.props.account.accName
    const active = this.props.active
    const accNum = this.props.account.accNum
    var navClass

    if (active === accNum) {
      navClass = "active"
    }
    else {
      navClass = ""
    }
    // console.log(this.props);
    return (
      <li className={navClass}>
        <a onClick={this.setAccount.bind(this)}> {name}</a>
      </li>
      );
  }
}

export default AccountListItem;
