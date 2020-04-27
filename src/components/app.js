import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';
import { fetchPostsWithQuery } from '../actions';

const App = props => {
	const { fetchPostsWithQuery, posts, history } = props;

	const handleSearchBarSubmit = useCallback(query => {
		fetchPostsWithQuery(query, () => {
			history.push('/results');
		});
	});

	const resultType = () => {
		if (posts.length > 1) {
			return 'RESULTS_POST';
		}
		return null;
	};

	return (
		<div className='app'>
			<Logo type={resultType()} />
			<SearchBar page='app' onSubmit={query => handleSearchBarSubmit(query)} />
			<RecentPosts />
		</div>
	);
};

const mapStateToProps = state => {
	return { posts: state.posts.resultsPosts };
};

export default connect(mapStateToProps, { fetchPostsWithQuery })(App);
