import { FETCH_POSTS, FETCH_QUERY } from './types';
import dailySmartyApi from '../apis/dailySmarty';

export const fetchRecentPosts = () => async dispatch => {
	const response = await dailySmartyApi.get('/posts');
	dispatch({
		type: FETCH_POSTS,
		payload: response.data.posts
	});
};
// Option 1
// export const fetchPostsWithQuery = query => async dispatch => {
// 	const response = await dailySmartyApi.get(`/search?q=${query}`);

// 	dispatch({
// 		type: FETCH_QUERY,
// 		payload: response.data.posts
// 	});

// 	history.push('/results');
// };

// Option 2
export const fetchPostsWithQuery = (query, callBack) => async dispatch => {
	const response = await dailySmartyApi.get(`/search?q=${query}`);

	dispatch({
		type: FETCH_QUERY,
		payload: response.data.posts
	});

	if (callBack) {
		callBack();
	}
};
