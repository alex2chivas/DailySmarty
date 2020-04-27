import { FETCH_POSTS, FETCH_QUERY } from '../actions/types';

const INIT_STATE = {
	resultsPosts: [],
	recentPosts: []
};

export default function(state = INIT_STATE, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return { ...state, recentPosts: action.payload };
		case FETCH_QUERY:
			return { ...state, resultsPosts: action.payload };
		default:
			return state;
	}
}
