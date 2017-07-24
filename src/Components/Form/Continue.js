import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Continue extends Component {


  addAccount(e){
    e.preventDefault()

  }

  render() {

    return (
          <div className="btn-group-vertical">
            <button onClick={this.addAccount.bind(this)}type="button" className="btn btn-primary btn-block">Add Account</button>
            <Link to="/" type="button" className="btn btn-success btn-block">Submit to Database</Link>
          </div>

      );
  }
}

export default Continue;
