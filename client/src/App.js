import React, { Component } from 'react';
import './App.css';
import ChannelsContainer from './containers/ChannelsContainer'
import About from './components/About'
import Home from './components/Home'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar'

export default class App extends Component {

  render() {
    return (
        <div className="App">
          <header> 
            <h2>Welcome to Acu Cards!</h2>
          </header>
          <Router>
            <React.Fragment>
              <NavBar />
                <Route exact path='/channels' component={ChannelsContainer} />
                <Route exact path='/about' component={About} />
                <Route exact path='/home' component={Home} />
            </React.Fragment>
          </Router>
        </div>
    );
  }
}


