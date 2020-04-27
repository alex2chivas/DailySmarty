import { Link } from 'react-router-dom';
import React from 'react';

const Logo = props => {
	const size = {
		height: props.size ? props.size : 105,
		width: props.size ? props.siz : 105
	};

	const renderImage = type => {
		if (type === 'RESULTS_PAGE') {
			return (
				<Link to='/'>
					<img style={size} alt='Daily Smarty UI Image Logo' src='/assets/ds_circle_logo.png' />
				</Link>
			);
		} else if (type === 'RESULTS_POST') {
			return (
				<Link to='/results'>
					<img style={size} alt='Daily Smarty UI Image Logo' src='/assets/ds_circle_logo.png' />;
				</Link>
			);
		} else {
			return <img style={size} alt='Daily Smarty UI Image Logo' src='/assets/ds_circle_logo.png' />;
		}
	};

	return <div className='logo-main'>{renderImage(props.type)}</div>;
};

export default Logo;
