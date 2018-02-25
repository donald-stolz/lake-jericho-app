import React, { Component } from 'react';
import PropTypes from 'prop-types'

// TODO: Add default props or some blank object

class AddPerformance extends Component {
	constructor(props){
		super(props)
	}

  onSave(e){
    e.preventDefault()

    var performanceHist = {
      date: this.refs.date.value,
      tax: this.refs.tax.value,
      horizon: this.refs.horizon.value,
      bias: this.refs.bias.value,
      beginBal: this.refs.startBal.value,
      endBal: this.refs.endBal.value,
      netReturn: this.refs.netReturn.value
    }

    this.props.save(performanceHist)
  }

  cancelButton(){
    //if new client === true
    if (this.props.newClient) {
      return null;
    }
    //else not new client
    else {
      return(<button onClick={this.onCancel.bind(this)} className="btn btn-danger pull-left"> Cancel </button>)
    }
  }

  onCancel(e){
    e.preventDefault();
    this.props.cancel()
  }

  render(){
		const past = this.props.pastPerform;
		// TODO: Add 1 to date
		var nextDate = new Date(past.date);


    return(
      <div className="container-fluid">
        <div className="panel panel-primary" id="financialInformation">
          <div className="panel-heading">
            <h2 className="panel-title">Performance History</h2>
          </div>
          <div className="panel-body">
            <form className="form-horizontal">

              <div className="form-group"><label className="col-sm-2 control-label">Date:</label>
                <div className="col-sm-10">
                  <input type="month" className="form-control"
                      placeholder="Date" ref="date"
											value={nextDate}/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Tax:</label>
                <div className="col-sm-10">
                  <select className="custom-select form-control" ref="tax"
									value={past.tax}>
                    <option ></option>
                    <option value="Taxable">Taxable</option>
                    <option value="Tax-free">Tax-free</option>
                    <option value="Tax-deffered">Tax-deffered</option>
                  </select>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Horizon:</label>
                <div className="col-sm-10">
                  <select className="custom-select form-control" ref="horizon"
										value={past.horizon}>
                    <option ></option>
                    <option value="Short">Short</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Long">Long</option>
                  </select>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Bias:</label>
                <div className="col-sm-10">
                  <select className="custom-select form-control" ref="bias"
									value={past.bias}>
                     <option ></option>
                     <option value="Growth">Growth</option>
                     <option value="Aggregation">Aggregation</option>
                     <option value="Distribution">Distribution</option>
                   </select>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Start Balance: $</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control"
                      placeholder="Start Balance" ref="startBal"
											value={past.endBal}/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">End Balance: $</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control"
                      placeholder="End Balance" ref="endBal"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Net Return: %</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control"
                      placeholder="Net Return" ref="netReturn"/>
                </div>
              </div>

              {this.cancelButton()}
              <button onClick={this.onSave.bind(this)} className="btn btn-success pull-right"> Save </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

AddPerformance.propTypes = {
	pastPerform	: PropTypes.shape({
		date		: PropTypes.string,
		tax			: PropTypes.string,
		horizon	: PropTypes.string,
		bias		: PropTypes.string,
		endBal	: PropTypes.number
	})
}

AddPerformance.defaultProps = {
	pastPerform	: PropTypes.shape({
		date		: '',
		tax			: '',
		horizon	: '',
		bias		: '',
		endBal	: 0
	})
}

export default AddPerformance;