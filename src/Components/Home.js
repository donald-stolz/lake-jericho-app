import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HomeListItem from './List/HomeListItem'
import PropTypes from 'prop-types'

// TODO: Add conditional loading spinner

class Home extends Component {
  constructor(props){
    super(props)

		this.props.getList()
    this.state = {clients : this.props.clients}
  }

  render() {

    let HomeList;
		var plusStyle = {color: '#337ab7', fontSize: '110%'};
    if (this.state.clients) {
      HomeList = this.props.clients.map(client => {
         return(
           <HomeListItem key={client._id}
					 name={client.personal.name}
					 	id={client._id}
					 />
          )
        });
      }
    return(

        <div className="container-fluid">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h2 className="panel-title">Name
              <Link to="/NewClient" className="btn btn-default btn-xs pull-right">
                <strong style={plusStyle}>+</strong>
              </Link>
              </h2>
            </div>
              <ul className="list-group">
                {HomeList}
              </ul>
          </div>
        </div>

    )
  }
}

Home.propTypes = {
	clients: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string,
		"personal.name": PropTypes.string
	})).isRequired,
}

Home.defaultProps = {
	clients: [{
		_id: '0',
		"personal.name": 'No clients'
	}]
}

export default Home;
