import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ClientAPI  from '../../Data/ClientAPI'

/*Requires:
Cancel call
Remove call
Confirm bool

Confirmation button will be contidonally rendeced on profile,
 so that when it is clicked confirmation box is the only thing rendered
*/
class RemoveClient extends Component {
  constructor(props){
    super(props)

    this.state = {remove : props.confirm}
  }

  confirm(e){
    e.preventDefault()

    this.props.removeClient()
  }

  cancel(e){
    e.preventDefault()
    // Set state back to false
    this.setState({remove : false})
    this.props.cancel()
  }

  // If clicked set to confirm
  removeButton(){
    const remove = this.state.remove
    // this.setState({remove : confirm})
    console.log(this.state);
    if (!remove) {
      return(
        <button onClick={this.confirm.bind(this)}
                type="button"
                className="btn btn-danger btn-block">Remove Client</button>
      )
    }
    else {
      return(
        <div className="container-fluid">
          <button onClick={this.cancel.bind(this)}type="button" className="btn btn-primary btn-block">Cancel</button>
          <Link to="/" type="button" className="btn btn-danger btn-block">Remove from Database</Link>
        </div>)
    }
  }

  componentWillUnmount(){
    if (this.state.remove) {
      ClientAPI.removeClient(this.props.id)
    }
  }

  render() {

    return (
      <div>
        {this.removeButton()}
      </div>
      );
  }
}

export default RemoveClient;
