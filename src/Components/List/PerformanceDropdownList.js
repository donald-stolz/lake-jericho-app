import React, { Component } from 'react';

class PerformanceDropdownList extends Component {


  selectPerformance(e){
    var selected = e.target.value
    // console.log(selected);
    this.props.selectDate(selected)
  }

  // TODO: addAccount() button

  render() {
    var history = []


    // console.log(this.props);

      history = this.props.history.map(performance =>{
        return (
          <option key={performance.date} value={performance.date}>{performance.date}</option>
        )
      })
      const active = this.props.active
      var selected = this.props.history[active].date
      if (!selected) {
        selected = " "
      }

    return (
      <form className="form-horizontal">
      <div className="form-group"><label className="col-md-1 control-label p-label">Date:</label>
        <div className="col-md-11">
          <select className="form-control" value={selected} onChange={this.selectPerformance.bind(this)}>
            {history}
          </select>
        </div>
      </div>
      </form>
      );
  }
}

export default PerformanceDropdownList;
