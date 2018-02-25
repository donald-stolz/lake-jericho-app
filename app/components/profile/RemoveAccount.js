import React, { Component } from 'react';

class RemoveAccount extends Component{
  /* Props recieved:
      Cancel method
      Confirm method
      Remove method
      Display bool
      Active Account object

    The remove button is rendered at the bottom of the account section,
      until it is clicked and changes to the confrimation dialog.
      The confirmation button will be contidonally rendered on the account
      section. When it is clicked, the confirmation box is the only
      component rendered.
  */
  constructor(props) {
    super()
    this.state = {display : props.display,
                  name   : props.account.accName,
                  number : props.account.accNum}
  }

  confirm(){this.props.confirm()}

  cancel(){this.props.cancel()}

  removeClient(){
    const accNum = this.state.number
    this.props.removeAccount(accNum)
  }

  removeButton(){
    // If clicked & set to confirm
    const display  = this.state.display
    const accName = this.state.name

    if (!display) {
      return(
        <button onClick={this.confirm.bind(this)} type="button"
                className="btn btn-danger btn-block">Remove Account</button>
    )}
    else {
      return(
          <div className="panel panel-primary" >
            <div className="panel-heading">
              <h1 className="panel-title">Account Information</h1>
            </div>
            <div className="panel-body">
              <h2>Are you sure you want to remove {accName}?</h2>
              <button onClick={this.cancel.bind(this)}type="button"
                      className="btn btn-primary btn-block">Cancel</button>
              <button onClick={this.removeClient.bind(this)} type="button"
                      className="btn btn-danger btn-block">Remove Account</button>
            </div>
          </div>
    )}
  }

  render() {
    return (
      <div>
        {this.removeButton()}
      </div>
      );
  }
}

export default RemoveAccount;
