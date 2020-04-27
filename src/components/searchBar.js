import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { validate } from './formValidation/validation';

const renderInput = ({ input, label, type, meta: { touched, error } }) => {
	const inputColor = {
		backgroundColor: 'rgba(243, 9, 48, 0.788)'
	};

	const displayColorError = () => {
		if (touched && error) {
			return inputColor;
		}
	};

	return (
		<div className='search-bar-wrapper'>
			<input
				autoComplete='off'
				placeholder='&#xf002; Search DailySmarty'
				type={type}
				{...input}
				style={displayColorError()}
			/>
			<div className='content-error-return'>
				<p className='error'>{touched && error && <span>{error}</span>}</p>
				<p>Press return to search</p>
			</div>
		</div>
	);
};

const SearchBar = React.memo(props => {
	const { handleSubmit } = props;

	const handleFormSubmit = ({ query }) => {
		props.onSubmit(query);
	};

	return (
		<form
			className={`search-bar search-bar-${props.page}`}
			onSubmit={handleSubmit(handleFormSubmit)}
		>
			<Field name='query' type='text' component={renderInput} />
		</form>
	);
});

export default reduxForm({
	form: 'searchBar',
	validate
})(SearchBar);
