import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home       from './Components/Home'
// import NewClient  from './Components/NewClient'
// import Profile    from './Components/Profile'
//

// <Route path="/about" component={About}/>
// <Route path="/topics" component={Topics}/>

import './App.css';

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Link to="/"><h1> Lake Jericho </h1></Link>
          </div>
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
