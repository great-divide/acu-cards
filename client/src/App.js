import React, { Component } from 'react';
import './App.css';
import DashContainer from './containers/DashContainer'


class App extends Component {
  // state = {
  //   point: ''
  // }


  // componentDidMount = () => {
  //   fetch('./points/1', {
  //     method: 'GET',
  //   }).then(response => response.json())
  //   .then(resp => this.setState({
  //     point: resp
  //   }))
  // }



  render() {
    // const point = this.state.point
    return (
      <div className="App">
        <DashContainer />
        <p>{this.state}</p>
      </div>
    );
  }
}

export default App;
