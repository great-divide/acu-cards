export default function rootReducer(
	state = {
		loading: false,
		points: [],
		channels: []
	}, action) {
		switch (action.type) {
			case 'LOADING_POINTS':
				return {...state, loading: true}

			case 'FETCH_POINTS':
			
				return {...state, loading: false, points: action.payload}
 			
 			case 'LOADING_CHANNELS':
				return {...state, loading: true}

			case 'FETCH_CHANNELS':
			
				return {...state, loading: false, channels: action.payload}

			default:
				return state
		}
}