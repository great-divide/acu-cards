export function fetchChannels() {
	return (dispatch) => {
		dispatch({ type: 'LOADING_CHANNELS' });
	
		return fetch('./channels')
			.then(response =>  response.json())
			.then(channels => dispatch({ type: 'FETCH_CHANNELS', payload: channels }))
	}
}