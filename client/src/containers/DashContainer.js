import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashPoints from '../components/DashPoints'

class DashContainer extends Component {

	componentDidMount = () => {
		console.log(this.props)
	}

	render() {
		return(
			<div>
				Dash Container!

			</div>
		)
	}
}

const mapStateToProps = ({ points }) => { return { points }}

export default connect(mapStateToProps)(DashContainer)