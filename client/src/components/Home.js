import React from 'react';
import select_channel from '../images/select_channel.png'
import select_show_back from '../images/select_show_back.png'


const Home = (props) =>
	<div>		
		<h4>The simplest, easiest-to-use Acupuncture Study App...</h4>
		<br/>
		<div class="text-left ml-3">
			<p>Choose a Channel</p>
			<img src={select_channel} height="100" width="400" />
			<p>Click 'Show/Hide Back' to see the "back" of the flashcard and reveal an image and description of the point's location</p>
			<img src={select_show_back} height="200" width="400" />
		</div>
	</div>

export default Home