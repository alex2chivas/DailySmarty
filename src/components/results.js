import React from 'react';
import { connect } from 'react-redux';

import Logo from './logo';
import SearchBar from './searchBar';
import ResultsPosts from './resultsPosts';
import { fetchPostsWithQuery } from '../actions';

const Results = props => {
	const handleSearchBarSubmit = query => {
		props.fetchPostsWithQuery(query);
	};

	return (
		<div className='results'>
			<Logo size={55} type='RESULTS_PAGE' />
			<SearchBar page='result' onSubmit={query => handleSearchBarSubmit(query)} />
			<ResultsPosts />
		</div>
	);
};

export default connect(null, { fetchPostsWithQuery })(Results);
