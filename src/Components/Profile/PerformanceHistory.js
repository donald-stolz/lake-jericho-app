import React, { Component } from 'react';
import AddPerformance from '../Form/AddPerformance'
import PerformanceDropdownList from '../List/PerformanceDropdownList'

// TODO: Check for Duplicate method
// TODO: Index records by date

class PerformanceHistory extends Component {
  constructor() {
    super()

    this.state = {editing : false,
                  active: 0}
  }

  setEditing(){
    this.setState({editing : true})
  }

  cancelEdit(){
    this.setState({editing : false})
  }

  recordPerformance(data){
    var history = []
    history = this.props.history
    history.push(data)
		// TODO Sort performance here
    this.props.save(history)
    this.setState({editing : false})
  }

  selectPerformance(selected){

    const history = this.props.history

    console.log("Selected " + selected);
    var newActive
    for (var i = 0; i < history.length; i++) {
      if (history[i].date === selected) {
        newActive = i
        break;
      }
    }

    this.setState({active : newActive})
  }

  renderItemOrEdit(){
    const editing = this.state.editing
    const active = this.state.active
    const history = this.props.history
    var performance = history[active]
		var plusStyle = {color: '#337ab7', fontSize: '110%'};

    if (editing) {
     return <AddPerformance save={this.recordPerformance.bind(this)}
                            newClient={false}
                            cancel={this.cancelEdit.bind(this)}/>
    }
    else {
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


            <PerformanceDropdownList history={history}
                                    selectDate={this.selectPerformance.bind(this)}
                                    active={active}/>

            <hr/>

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
      )
    }
  }

  render(){
    return(
      <div className="row">
        {this.renderItemOrEdit(this.props.accounts)}
      </div>
  )}
}

export default PerformanceHistory
