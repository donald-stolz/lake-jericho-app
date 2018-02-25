import React, { Component } from 'react';
import AddPerformance from '../form/AddPerformance';
import PerformanceDropdownList from '../list/PerformanceDropdownList';

class PerformanceHistory extends Component {
  constructor() {
    super();

    this.state = {
      editing: false,
      active: 0
    };
  }

  setEditing() {
    this.setState({ editing: true });
  }

  cancelEdit() {
    this.setState({ editing: false });
  }

  recordPerformance(data) {
    // TODO: Check for Duplicate date method
    let history = [];
    history = this.props.history;
    history.push(data);
    history.sort((a, b) =>
      // "Sort Javascript Object Array By Date" - StackOverflow
			// Turn your strings into dates, and then subtract them
			// to get a value that is either negative, positive, or zero.
		new Date(b.date) - new Date(a.date));
    this.props.save(history);
    this.setState({ editing: false });
  }

  selectPerformance(selected) {
    const history = this.props.history;

    let newActive;
    for (let i = 0; i < history.length; i++) {
      if (history[i].date === selected) {
        newActive = i;
        break;
      }
    }

    this.setState({ active: newActive });
  }

  renderItemOrEdit() {
    const editing = this.state.editing;
    const active = this.state.active;
    const history = this.props.history;
    const performance = history[active];
    const plusStyle = { color: '#337ab7', fontSize: '110%' };

    if (editing) {
      // TODO: Add data from most recent to prepopulate field
      // NOTE: Either top or bottom of performance array
      return (<AddPerformance
        save={this.recordPerformance.bind(this)}
        newClient={false}
        pastPerform={history[0]}
        cancel={this.cancelEdit.bind(this)}
      />);
    }

    return (
      <div className="container-fluid">
        <div className="panel panel-primary" >
          <div className="panel-heading">
            <h2 className="panel-title">Performance History
              <button type="button" onClick={this.setEditing.bind(this)} className="btn btn-default btn-xs pull-right">
                <strong style={plusStyle}>+</strong>
              </button>
            </h2>
          </div>
          <div className="panel-body">


            <PerformanceDropdownList
              history={history}
              selectDate={this.selectPerformance.bind(this)}
              active={active}
            />

            <hr />

            <ul className="list-group" id="listPersonal">
              <li className="list-group-item"><label>Tax:</label> {performance.tax}</li>
              <li className="list-group-item"><label>Horizon:</label> {performance.horizon}</li>
              <li className="list-group-item"><label>Bias:</label> {performance.bias}</li>
              <li className="list-group-item"><label>Begining Balance:</label> ${performance.beginBal}</li>
              <li className="list-group-item"><label>End Balance:</label> ${performance.endBal}</li>
              <li className="list-group-item"><label>Net Return:</label> %{performance.netReturn}</li>
            </ul>

          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        {this.renderItemOrEdit(this.props.accounts)}
      </div>
    );
  }
}

export default PerformanceHistory;
