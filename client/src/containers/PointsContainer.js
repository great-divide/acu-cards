import React, { Component } from 'react';
import PointFront from '../components/PointFront'
import PointBack from '../components/PointBack'
import Button from 'react-bootstrap/Button';

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
				<Button variant="light" onClick={ this.toggle }> Show/Hide Back </Button>
				{this.state.front ? (<PointFront point={this.props.point}/>) : (<PointBack point={this.props.point} />)}
			</div>
		)
	}
}

export default PointsContainer

