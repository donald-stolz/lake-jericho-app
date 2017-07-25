import React, { Component } from 'react';

class PerformanceDropdownList extends Component {


  selectPerformance(e){
    console.log(this.props);
    console.log(e.target.value);
  }

  // TODO: addAccount() button

  render() {
    var history = []


    console.log(this.props);
    if (this.props.history.date != "") {
      console.log(this.props.history);
      history = this.props.history.map(performance =>{
        return (
          <option key={performance.date} value={performance.date}>{performance.date}</option>
        )
      })
    }

    return (
      <form className="form-horizontal">
      <div className="form-group"><label className="col-md-1 control-label p-label">Date:</label>
        <div className="col-md-11">
          <select className="form-control" value={""} onChange={this.selectPerformance.bind(this)}>
            {history}
          </select>
        </div>
      </div>
      </form>
      );
  }
}

export default PerformanceDropdownList;
