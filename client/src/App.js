import React, { Component } from 'react';
import About from './components/About'
import './App.css';
import ChannelsContainer from './containers/ChannelsContainer'
import {
  Route,
  NavLink,
  NavBar
} from 'react-router-dom';
import Button from 'react-bootstrap/Button';  




export default class App extends Component {
  constructor() {
    super();

  }

  render() {

    return (

        <div className="App">
          <ChannelsContainer />
        </div>

    );
  }
}


