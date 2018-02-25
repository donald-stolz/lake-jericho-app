import React, { Component } from 'react';
import AccountListItem from './AccountListItem'

class AccountNavList extends Component {


  setAccount(accNum){
    this.props.set(accNum)
  }

  render() {
    let AccountList = []
    const active = this.props.active

    if (this.props.accounts) {
      AccountList = this.props.accounts.map(account => {
        return(
            <AccountListItem key={account.accNum}
                            setAcc={this.setAccount.bind(this)}
                            account={account}
                            active={active}/>
        )})
    }

    return (

      <nav className="navbar navbar-default primary">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            {AccountList}
          </ul>
        </div>
      </nav>

      );
  }
}

export default AccountNavList;
