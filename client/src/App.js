import React, { Component } from 'react';
import About from './components/About'
import './App.css';
import ChannelsContainer from './containers/ChannelsContainer'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  NavBar
} from 'react-router-dom';




export default class App extends Component {


  render() {

    return (
      <Router>
        <div className="App">
          <React.Fragment>
            <Route exact path="/points/home" />
            <Route exact path="/about" component={About} />
            <ChannelsContainer />
          </React.Fragment>
        </div>
      </Router>
    );
  }
}


