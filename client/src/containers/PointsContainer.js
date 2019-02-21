import React, { Component } from 'react';
// import { connect } from 'react-redux';


class PointsContainer extends Component {


	render() {
		return(
			<div>
				PointsContainer
				{this.props.point.name}
			</div>
		)
	}
}



export default PointsContainer