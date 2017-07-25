import React, { Component } from 'react';
import AddPerformance from '../Form/AddPerformance'
import PerformanceDropdownList from '../List/PerformanceDropdownList'


class PerformanceHistory extends Component {
  constructor() {
    super()

    this.state = {editing : false,
                  active: 0}
  }

  setEdit(){
    this.setState({editing : true})
  }

  cancelEdit(){
    this.setState({editing : false})
  }

// TODO: Connect to API
  recordPerformance(data){}
  //   ClientAPI.recordPerformance(data)
  //   this.setState({editing : false})
  // }

  renderItemOrEdit(){
    const editing = this.state.editing
    const active =this.state.active
    const performance = this.props.performance[active]

    if (editing) {
     return <AddPerformance save={this.recordPerformance.bind(this)}
                            cancel={this.cancelEdit.bind(this)}/>
    }
    else {
      return (
        <div className="container-fluid">
        <PerformanceDropdownList/>
          <div className="panel panel-primary" >
            <div className="panel-heading">
              <h2 className="panel-title">Performance History</h2>
            </div>
            <div className="panel-body">
              <ul className="list-group" id="listPersonal">
                <li className="list-group-item"><label>Account Name:</label> </li>

              </ul>

            </div>
          </div>
        </div>
      )
    }
  }
}

export default PerformanceHistory
