import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    point: ''
  }


  componentDidMount = () => {
    fetch('./points/1', {
      method: 'GET',
    }).then(response => response.json())
    .then(resp => this.setState({
      point: resp
    }))
    // debugger
  }



  render() {
    const point = this.state.point
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />


        </header>
        <p>
          {point.name}
        </p>
        {point.abb}
        <img src={point.image_url} alt='' />

      </div>
    );
  }
}

export default App;
