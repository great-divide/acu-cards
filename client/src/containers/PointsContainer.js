import React, { Component } from 'react';
import PointFront from '../components/PointFront'
import PointBack from '../components/PointBack'
// import { connect } from 'react-redux';


class PointsContainer extends Component {
	state = {
		front: true
	}

	toggle = () => {
		var res = this.state.front
		this.setState({ front: !res})
	}


	render() {
		return(
			<div>
				PointsContainer
	
				<button onClick={ this.toggle }> Toggle </button>
				{this.state.front ? (<PointFront point={this.props.point}/>) : (<PointBack point={this.props.point} />)}
			</div>
		)
	}
}



export default PointsContainer