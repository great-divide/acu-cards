import React from 'react';

const PointBack = (props) =>
	<div>		
		<h6>{props.point.location}<img src={props.point.image_url} alt='' /></h6>
	</div>

export default PointBack