import React, { Component } from 'react';

class PerformanceDropdownList extends Component {


  setAccount(accNum){
    // e.preventDefault()
    // const accNum = this.props.accNum
    this.props.set(accNum)
  }

  // TODO: addAccount() button

  render() {
    let history = []
    const active = this.props.active
    console.log(this.props.accounts);
    if (this.props.accounts) {

    }

    return (
        <select className="custom-select form-control" >
          {history}
        </select>
      );
  }
}

export default PerformanceDropdownList;

// 
// <select className="custom-select form-control" >
//    <option ></option>
//  </select>
