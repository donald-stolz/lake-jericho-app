import React, { Component } from 'react';

class PerformanceDropdownList extends Component {


  selectPerformance(){
    console.log(this.props);
  }

  // TODO: addAccount() button

  render() {
    let history = []
    const active = this.props.active
    console.log(this.props.performance);
    if (this.props.accounts) {
      history = this.props.performance.map(this.selectPerformance)
    }

    return (
      <form className="form-horizontal">
      <div className="form-group"><label className="col-md-1 control-label p-label">Date:</label>
        <div className="col-md-11">
          <select className="form-control" >
            <option/>
          </select>
        </div>
      </div>
      </form>
      );
  }
}

export default PerformanceDropdownList;

//
// <select className="custom-select form-control" >
//    <option ></option>
//  </select>
