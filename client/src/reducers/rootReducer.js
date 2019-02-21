export default function rootReducer(
	state = {
		loading: false,
		points: [],
		// prescriptions: []
	}, action) {
		switch (action.type) {
			case 'LOADING_POINTS':
				return {...state, loading: true}

			case 'FETCH_POINTS':
			
				return {...state, loading: false, points: action.payload}

			default:
				return state
		}
}