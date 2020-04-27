import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import renderUsefulLinks from './renderUsefulLinks';

const Post = React.memo(props => {
	const [ height, setHeight ] = useState(0);

	const renderAssociatedTopics = () => {
		const topics = props.associated_topics.map((topic, index) => {
			return (
				<span className='post-topic' key={`${topic} ${index}`}>
					{topic}
				</span>
			);
		});
		return topics;
	};

	const renderLinks = () => {
		let links = props.post_links.map((post_link, index) => {
			const { link_url } = post_link;
			return (
				<div className='post-link' key={index}>
					<div className='post-link-box' />
					<div className='post-link-link'>
						<a href={link_url}>{renderUsefulLinks(link_url)}</a>
					</div>
				</div>
			);
		});
		if (links == 0) {
			return <div className='no-content'>No post links</div>;
		}

		return links;
	};

	const renderContent = () => {
		if (props.type === 'RECENT') {
			return (
				<li className='recent-posts'>
					<div className='recent-posts-title'>{props.title}</div>
					<div>{renderAssociatedTopics()}</div>
				</li>
			);
		} else if (props.type === 'RESULT') {
			return (
				<li
					className='result-post'
					onMouseEnter={() => setHeight(60)}
					onMouseLeave={() => setHeight(0)}
				>
					<div className='result-posts-topics'>{renderAssociatedTopics()}</div>
					<div className='result-post-title'>
						<a href={props.url_for_post} target='_blank'>
							{props.title}
						</a>
					</div>
					<AnimateHeight duration={500} height={height}>
						<div className='result-post-links'>{renderLinks()}</div>
					</AnimateHeight>
				</li>
			);
		}
	};

	return <React.Fragment>{renderContent()}</React.Fragment>;
});

export default Post;
