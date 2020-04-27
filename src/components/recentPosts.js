import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecentPosts } from '../actions';

import Post from './post';

const RecentPosts = props => {
	const { fetchRecentPosts } = props;

	useEffect(
		() => {
			fetchRecentPosts();
		},
		[ fetchRecentPosts ]
	);

	const renderPosts = () => {
		return props.recentPosts.map((post, index) => {
			if (index < 3) {
				return <Post type='RECENT' {...post} key={post.id} />;
			}
		});
	};

	return (
		<div className='recent-posts'>
			<div className='recent-posts-wrapper'>
				<div className='recent-post-heading'> Recent Posts </div>
				<ul className='recent-posts-post'>{renderPosts()}</ul>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return { recentPosts: state.posts.recentPosts };
};

export default connect(mapStateToProps, { fetchRecentPosts })(RecentPosts);
