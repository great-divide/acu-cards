import React, { Component } from 'react';
// import PointFront from './PointFront'
// import PointBack from './PointBack'
import PointsContainer from '../containers/PointsContainer'

// import Pagination from 'react-bootstrap/Pagination'

class Channel extends Component {

  renderPoints = () => {
    
    let filteredPoints = this.props.points.filter(el => el.channel === this.props.name)
    // debugger
    return filteredPoints.map((p, index) => 
      <PointsContainer point={p} key={index} />
    )
  }


  render() {
    return(
      <div>
        
        <h3>this is a channel component that contains individual Points</h3>
              {this.renderPoints()}
      </div>
    );
  }
};

export default Channel   


    // return filteredPoints.map((p, index) =>
    //   <div>   
    //     <PointFront point={p} key={index} id={p.abb + "front"}/>
    //     <PointBack point={p} key={index} id={p.abb + "back"}/>
    //   </div>
    // )
