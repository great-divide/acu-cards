import React, { Component } from 'react';
import Point from './Point'

class Points extends Component {

  renderPoints = () => {
    let filteredPoints = this.props.points.filter(el => el.channel === this.props.name)
    
    return filteredPoints.map((p, index) =>
  
        <Point point={p} key={index} id={p.abb}/>
    )
  }


  render() {
    return(
      <div>
        <h3>this is a points component</h3>
          <div name="point-list">
            {this.renderPoints()}
          </div>
      </div>
    );
  }
};

export default Points   



