export function fetchPoints() {
	return (dispatch) => {
		dispatch({ type: 'LOADING_POINTS' });
	
		return fetch('./points')
			.then(response =>  response.json())
			.then(points => dispatch({ type: 'FETCH_POINTS', payload: points }))
	}
}