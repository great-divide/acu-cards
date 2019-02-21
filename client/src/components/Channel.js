import React, { Component } from 'react';
import PointsContainer from '../containers/PointsContainer'

class Channel extends Component {

  renderPoints = () => {
    let filteredPoints = this.props.points.filter(el => el.channel === this.props.name)
    return filteredPoints.map((p, index) => 
      <PointsContainer point={p} key={index} />
    )
  }

  render() {
    return(
      <div>
        <br/>
          {this.renderPoints()}
      </div>
    );
  }
};

export default Channel   

  