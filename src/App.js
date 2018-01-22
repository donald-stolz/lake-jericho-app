import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// TODO: import containers
import Home       from './Components/Home'
import NewClient  from './Components/NewClient'
import ProfilePage    from './Components/ProfilePage'
// TODO: Create header component

import reducer from './Reducers'
import thunk from 'redux-thunk'
// TODO: Add history to Router?
// TODO: Add redux store (pre: Finish reducers & actions)

import './App.css';

const store = createStore(Reducer, applyMiddleware(thunk));

export default class App extends Component {

  render() {

    return (
			<Provider store={store}>
	      <Route>
	        <div className="App">
	          <div className="App-header">
	            <Link to="/"><h1> Lake Jericho </h1></Link>
	          </div>
	          <div className="row">
	            <Route exact path="/" component={Home}/>
	            <Route path="/NewClient" component={NewClient}/>
	            <Route path="/Profile/:id" component={ProfilePage}/>
	          </div>
	        </div>
	      </Router>
			</Provider>
    );
  }
}
