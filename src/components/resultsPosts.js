import React from 'react';
import { connect } from 'react-redux';

import Post from './post';

const ResultsPosts = props => {
	const renderPosts = () => {
		return props.posts.map((post, index) => {
			return <Post type='RESULT' key={index} {...post} />;
		});
	};

	return (
		<div className='results-posts'>
			<div className='results-posts-wrapper'>
				<ul className='results-posts-posts'>{renderPosts()}</ul>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return { posts: state.posts.resultsPosts };
};

export default connect(mapStateToProps)(ResultsPosts);
