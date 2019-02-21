import React from 'react';
// import { Route } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

const PointBack = (props) =>
	<div>
				
		<h4>{props.point.location}<img src={props.point.image_url}/></h4> 

	</div>

export default PointBack