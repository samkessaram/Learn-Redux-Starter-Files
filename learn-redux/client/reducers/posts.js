// reducer accepts two args:
// 1) action
// 2) copy of current state

export default function posts(state = [], action) {
	switch (action.type) {
		case 'INCREMENT_LIKES':
			const i = action.index;
			console.log(state[i]);

			return [
				...state.slice(0, i),
				{ ...state[i], likes: state[i].likes + 1 },
				...state.slice(i + 1)
			];
		default:
			return state;
	}
	return state;
}
