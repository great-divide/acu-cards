import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPoints} from '../actions/pointActions'
import Points from '../components/Points'

class PointsContainer extends Component {

  componentDidMount() {
    this.props.fetchPoints();

  }

  renderPoints = () => {
  	return this.props.state.points.map((p) =>
  		<div>
	  		<p>{p.name}</p>
	  		<img src={p.image_url} />
			</div>
  	)
  }

	render(){
		return(
			<div>
				I loaded
				{this.renderPoints()}
			</div>
		)
	}
}

const mapStateToProps = state => {return {state}}

const mapDispatchToProps = dispatch => {
  return{
    fetchPoints: () => dispatch(fetchPoints())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PointsContainer)